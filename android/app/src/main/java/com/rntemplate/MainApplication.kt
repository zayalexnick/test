package com.rntemplate

import android.content.Context
import android.support.multidex.MultiDex
import info.goodline.inappmanager.application.RNController
import info.goodline.inappmanager.manager.InAppManager
import info.goodline.passport.accountmanagment.GLPassport
import info.goodline.react.android.authbridge.modules.RNGlAuthBridgePackage
import info.goodline.react.android.fcm.messaging.ITokenRegistrator
import info.goodline.react.android.fcm.modules.RNGlFcmBridgePackage
import info.goodline.react.android.innapslist.modules.InAppsListViewPackage
import io.reactivex.Completable
import com.bugsnag.BugsnagReactNative
import com.doochik.RNAppMetrica.AppMetricaPackage
import com.horcrux.svg.SvgPackage
import com.sudoplz.reactnativeamplitudeanalytics.RNAmplitudeSDKPackage

class MainApplication : RNController() {
    override val isDebugMode: Boolean
        get() = BuildConfig.DEBUG


    override fun onCreate() {
        val passport = GLPassport.configure(this.applicationContext, BuildConfig.VERSION_NAME, false)
        val inAppManager = InAppManager.configure("https://inapps.goodline.info/api/v1/android/list", this.applicationContext)
        super.onCreate()
        registerPackage(BugsnagReactNative.getPackage())
        registerPackage(SvgPackage())
        registerPackage(AppMetricaPackage())
        registerPackage(RNAmplitudeSDKPackage(this@MainApplication))
        registerPackage(InAppsListViewPackage(inAppManager))
        registerPackage(RNGlAuthBridgePackage(passport))

        registerPackage(RNGlFcmBridgePackage(object : ITokenRegistrator {
            override fun registerToken(token: String) {
                Completable.fromCallable {
                    passport.registerPushToken(token)
                }
            }
        }))
    }

    override fun attachBaseContext(base: Context?) {
        super.attachBaseContext(base)
        MultiDex.install(this)
    }
}

