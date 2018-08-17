package com.rntemplate


import info.goodline.react.android.fcm.messaging.FireBaseLaunchActivity

class MainActivity : FireBaseLaunchActivity() {
    override fun getMainComponentName(): String? = "RNTemplate"
}
