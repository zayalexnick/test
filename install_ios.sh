#!/bin/sh

# fix ios react dependences
`sed -i '' 's/#import <RCTAnimation\\/RCTValueAnimatedNode.h>/#import <React\\/RCTValueAnimatedNode.h>/' ./node_modules/react-native/Libraries/NativeAnimation/RCTNativeAnimatedNodesManager.h`
`sed -i '' 's/#import <fishhook\\/fishhook.h>/#import <fishhook.h>/' ./node_modules/react-native/Libraries/WebSocket/RCTReconnectingWebSocket.m`

# fix react appmetrica frameworks dependences

frameworkCount=`grep "FRAMEWORK_SEARCH_PATHS.*ios\/Carthage\/Build\/iOS" ./node_modules/react-native-appmetrica/ios/RCTAppMetrica/RCTAppMetrica.xcodeproj/project.pbxproj | wc -l`

if [ $frameworkCount = "0" ]
then
    `sed -i '' 's/FRAMEWORK_SEARCH_PATHS = ([^;]*/FRAMEWORK_SEARCH_PATHS = ("$\(PROJECT_DIR\)\/\.\.\/\.\.\/\.\.\/\.\.\/ios\/Carthage\/Build\/iOS",/' ./node_modules/react-native-appmetrica/ios/RCTAppMetrica/RCTAppMetrica.xcodeproj/project.pbxproj`
fi

