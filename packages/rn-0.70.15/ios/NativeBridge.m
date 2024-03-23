//
//  NativeBridge.m
//
//  Created by mereka-ta on 22/03/2024.
//

#import "NativeBridge.h"
#import <React/RCTRootView.h>

@implementation NativeBridge

static UIViewController *vc;

RCT_EXPORT_MODULE()

__attribute__((constructor))
static void initialize(void) {
}

RCT_EXPORT_METHOD(loadBundle:(NSString *)bundlePath)
{
    NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:bundlePath];

    dispatch_async(dispatch_get_main_queue(), ^{
        RCTRootView *rootView =
            [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                    moduleName: @"OtherBundle"
                                    initialProperties:
                                        @{
                                            @"params" : @{
                                                @"action": @"I was successfully passed"
                                            }
                                        }
                                    launchOptions: nil];
        UIViewController *vc = [[UIViewController alloc] init];
        vc.view = rootView;
        [[UIApplication sharedApplication].delegate.window.rootViewController presentViewController:vc animated:YES completion:nil];
    });
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"onSessionConnect"];
}

@end
