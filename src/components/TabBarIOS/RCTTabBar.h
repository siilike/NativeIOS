/**	
 * Copyright (c) Facebook, Inc. and its affiliates.	
 *	
 * This source code is licensed under the MIT license found in the	
 * LICENSE file in the root directory of this source tree.	
 */	

 #import <UIKit/UIKit.h>	
 
#import <React/RCTComponent.h>	
#import <React/RCTConvert.h>	

 @interface RCTTabBar : UIView	

 @property (nonatomic, strong) UIColor *unselectedTintColor;	
@property (nonatomic, strong) UIColor *tintColor;	
@property (nonatomic, strong) UIColor *barTintColor;	
@property (nonatomic, assign) BOOL translucent;	
#if !TARGET_OS_TV	
@property (nonatomic, assign) UIBarStyle barStyle;	
#endif	
@property (nonatomic, copy) RCTBubblingEventBlock onPressMore;	

 - (void)uiManagerDidPerformMounting;	

 @end
