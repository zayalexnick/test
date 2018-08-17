//
//  AppDelegate.swift
//  rntemplate
//
//  Created by Anton Skorodumov on 16.07.18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation
import UIKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  
  var window: UIWindow?
  var rootView: RCTRootView!
  
  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    application.statusBarStyle = .lightContent
    
    window = UIWindow(frame: UIScreen.main.bounds)
    let moduleInitialiser: RCTBridgeDelegate = InnAppRCTBridgeDelegate()
    let bridge: RCTBridge = RCTBridge(delegate: moduleInitialiser,
                                      launchOptions: launchOptions)
    
    rootView = RCTRootView(bridge: bridge,
                           moduleName: "RNTemplate",
                           initialProperties: launchOptions)
    
    FirebaseConfigurator.shared().setRootView(rootView)
    
    let rootViewController = UIViewController()
    rootViewController.view = rootView
    window?.rootViewController = rootViewController
    window?.makeKeyAndVisible()
    
    BugsnagReactNative.start()
    
    
    
    openPushNotification(application: application, launchOptions: launchOptions)
    
    return true
  }
  
  func application(_ application: UIApplication,
                   didReceiveRemoteNotification userInfo: [AnyHashable : Any]) {
    FirebaseConfigurator.shared().didReceivePushNotification(userInfo)
  }
  
  func application(_ application: UIApplication,
                   didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    FirebaseConfigurator.registerToken(deviceToken)
  }
  func application(_ application: UIApplication,
                   handleActionWithIdentifier identifier: String?,
                   forRemoteNotification userInfo: [AnyHashable : Any],
                   completionHandler: @escaping () -> Void)
  {
    FirebaseConfigurator.shared().didReceivePushNotification(userInfo, action: identifier ?? "")
  }
  
  func openPushNotification(application: UIApplication,
                            launchOptions: [UIApplicationLaunchOptionsKey: Any]?) {
    guard let userInfo = launchOptions?[.remoteNotification] as? [AnyHashable: Any] else { return }
    FirebaseConfigurator.shared().didReceiveColdStartPushNotification(userInfo)
  }
  
}
