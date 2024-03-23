import React from 'react';

import {NativeModules, Platform, Text, TouchableOpacity} from 'react-native';

export const ButtonLoadBundle = () => {
    const {NativeBridge} = NativeModules ?? {};

    return (
        <TouchableOpacity
            onPress={() => {
                if (NativeBridge?.loadBundle) {
                    NativeBridge?.loadBundle('otherbundle.js');
                } else {
                    console.log(`[BRIDGING] : Failed to load bundle, bridging for ${Platform.OS} is not configured`);
                }
            }}
            style={{
                width: 100,
                height: 50,
                backgroundColor: '#3686b8d1',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
            }}
        >
            <Text style={{color: '#fff'}}>Load Bundle</Text>
        </TouchableOpacity>
    );
};
