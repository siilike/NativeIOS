/**	
 * Copyright (c) Facebook, Inc. and its affiliates.	
 *	
 * This source code is licensed under the MIT license found in the	
 * LICENSE file in the root directory of this source tree.	
 *	
 * @format	
 * @flow	
 */	

'use strict';	

const { requireNativeComponent } = require('react-native');	

import type {ViewProps} from 'ViewPropTypes';	
import type {ColorValue} from 'StyleSheetTypes';	
import type {NativeComponent} from 'ReactNative';	
import type {SyntheticEvent} from 'CoreEventTypes';	

type NativeProps = $ReadOnly<{|	
 ...ViewProps,	
 unselectedTintColor?: ColorValue,	
 tintColor?: ColorValue,	
 unselectedItemTintColor?: ColorValue,	
 barTintColor?: ColorValue,	
 barStyle?: ?('default' | 'black'),	
 translucent?: ?boolean,	
 itemPositioning?: ?('fill' | 'center' | 'auto'),	
 onPressMore?: ?(event: SyntheticEvent<null>) => mixed,	
|}>;	

type RCTTabBarNativeType = Class<NativeComponent<NativeProps>>;	

module.exports = ((requireNativeComponent(	
 'RCTTabBar',	
): any): RCTTabBarNativeType);
