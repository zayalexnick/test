//
//  InnAppRCTBridgeDelegate.swift
//  vrach42
//
//  Created by Anton Skorodumov on 14.03.18.
//  Copyright © 2018 Facebook. All rights reserved.
//

import Foundation

class InnAppRCTBridgeDelegate: NSObject {
  
}

extension InnAppRCTBridgeDelegate: RCTBridgeDelegate {
  
  func sourceURL(for bridge: RCTBridge!) -> URL! {
    let jsCodeLocation = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: nil)
    return jsCodeLocation
  }
  
}
