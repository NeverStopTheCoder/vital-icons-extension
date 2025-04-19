// Add your code here
//%block="Vital Icons"
//%icon=
//%color=#FFA64D
//%weight=70
namespace VitalIcons {
    export enum VitalType {
        Hearts,
        Food,
        Water,
        Energy,
        Gas,
        Oxygen,
        Armor,
        Radiation
    }
    export enum VitalIconState {
        Full,
        Empty,
        Half
        }
    export enum INPUT {
        FULL,
        HALF
    }
    let vitalicons: Sprite[][] = [];
    let statusBarFullImages: Image[] = [];
    let statusBarEmptyImages: Image[] = [];
    let statusBarHalfImages: Image[] = [];
    //% block="create $type status bar with $elements elements || and custom filled $filled and custom empty $empty and custom half $half"
    //% blockSetVariable=VitalIcon
    //%filled.shadow=screen_image_picker
    //%empty.shadow=screen_image_picker
    //%half.shadow=screen_image_picker
    export function createStatusBar(type: VitalType, elements: number, filled?: Image, empty?: Image, half?: Image): Sprite[] {
        let statusBar: Sprite[] = [];

        // Define images based on type
    let fullImage: Image
    let emptyImage: Image
    let halfImage: Image
        if (type == VitalType.Hearts) {
            fullImage = img`
                . c 2 2 . 2 2 .
                c 2 2 2 2 2 4 2
                c 2 2 2 2 4 2 2
                c 2 2 2 2 2 2 2
                . c 2 2 2 2 2 .
                . . c 2 2 2 . .
                . . . c 2 . . .
            `;
            emptyImage = img`
                . . 1 1 . 1 1 .
                . 1 . . 1 . . 1
                . 1 . . . . . 1
                . 1 . . . . . 1
                . . 1 . . . 1 .
                . . . 1 . 1 . .
                . . . . 1 . . .
            `;
            halfImage = img`
                . c 2 2 . . . .
                c 2 2 2 . . . .
                c 2 2 2 . . . .
                c 2 2 2 . . . .
                . c 2 2 . . . .
                . . c 2 . . . .
                . . . c . . . .
            `;
        } else if (type == VitalType.Food) {
            fullImage = img`
                . . . . . . . . . .
                . . . f f . . . . .
                . . f 2 e f . . . .
                . f 2 1 2 e f . . .
                . f e 2 1 2 e f . .
                . . f e 2 e e f . .
                . . . f e e e f . .
                . . . . f f f 1 f f
                . . . . . . . f 1 f
                . . . . . . . f f .
            `;
            emptyImage = img`
                . . . . . . . . . .
                . . . 1 1 . . . . .
                . . 1 . . 1 . . . .
                . 1 . . . . 1 . . .
                . 1 . . . . . 1 . .
                . . 1 . . . . 1 . .
                . . . 1 . . . 1 . .
                . . . . 1 1 1 . 1 1
                . . . . . . . 1 . 1
                . . . . . . . 1 1 .
            `;
            halfImage = img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . 2 . . . .
                . . . . 2 e f . . .
                . . . 2 e e e f . .
                . . 2 e e e e f . .
                . . . f e e e f . .
                . . . . f f f 1 f f
                . . . . . . . f 1 f
                . . . . . . . f f .
            `;
        } else if (type == VitalType.Water) {
            fullImage = img`
                . . . . . . . . . .
                . . . . f . . . . .
                . . . f 6 f . . . .
                . . f 6 6 6 f . . .
                . . f 6 6 6 f . . .
                . f 6 9 6 6 6 f . .
                . f 6 6 9 6 6 f . .
                . f 6 6 9 6 6 f . .
                . . f 6 6 6 f . . .
                . . . f f f . . . .
            `;
            emptyImage = img`
                . . . . . . . . . .
                . . . . f . . . . .
                . . . f . f . . . .
                . . f . . . f . . .
                . . f . . . f . . .
                . f . . . . . f . .
                . f . . . . . f . .
                . f . . . . . f . .
                . . f . . . f . . .
                . . . f f f . . . .
            `;
            halfImage = img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . f 6 9 6 6 6 f . .
                . f 6 6 9 6 6 f . .
                . f 6 6 9 6 6 f . .
                . . f 6 6 6 f . . .
                . . . f f f . . . .
            `;
        } else if (type == VitalType.Energy) {
            // Energy
            fullImage = img`
                . . . . f 5
                . . . f 5 f
                . . f 5 f .
                . f 5 f . .
                f 5 f f . .
                f 5 5 5 f .
                . f f f 5 f
                . . f 5 f .
                . f 5 f . .
                f 5 f . . .
            `;
            emptyImage = img`
                . . . . f .
                . . . f . f
                . . f . f .
                . f . f . .
                f . f f . .
                f . . . f .
                . f f f . f
                . . f . f .
                . f . f . .
                f . f . . .
            `;
            halfImage = img`
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                . . . . . .
                f 5 5 5 f .
                . f f f 5 f
                . . f 5 f .
                . f 5 f . .
                f 5 f . . .
            `;
        } else if (type == VitalType.Gas)  {
            fullImage = img`
                2 2 2 2 2 . . . . .
                2 . . . 2 . f f . .
                2 2 2 2 2 2 2 2 2 .
                2 f 2 2 2 2 f 2 2 .
                2 2 f 2 2 f 2 2 2 .
                2 2 2 f f 2 2 2 2 .
                2 2 2 f f 2 2 2 2 .
                2 2 f 2 2 f 2 2 2 .
                2 f 2 2 2 2 f 2 2 .
                2 2 2 2 2 2 2 2 2 .
            `;
            emptyImage = img`
                1 1 1 1 1 . . . . .
                1 . . . 1 . 1 1 . .
                1 1 1 1 1 1 1 1 1 .
                1 . . . . . . . 1 .
                1 . . . . . . . 1 .
                1 . . . . . . . 1 .
                1 . . . . . . . 1 .
                1 . . . . . . . 1 .
                1 . . . . . . . 1 .
                1 1 1 1 1 1 1 1 1 .
            `;
            halfImage = img`
                2 2 2 2 2 . . . . .
                2 . . . 2 . . . . .
                f f f 2 2 . . . . .
                f f 2 2 2 . . . . .
                f 2 f 2 2 . . . . .
                2 2 2 f f . . . . .
                2 2 2 f f . . . . .
                2 2 f 2 2 . . . . .
                2 f 2 2 2 . . . . .
                2 2 2 2 2 . . . . .
            `;
        } else if (type == VitalType.Oxygen){
             fullImage = img`
                 . . . f f f . . .
                 . . f 6 6 6 f . .
                 . f 6 8 8 8 6 f .
                 f 6 8 1 1 8 8 6 f
                 f 6 8 1 8 8 8 6 f
                 f 6 8 8 8 8 8 6 f
                 . f 6 8 8 8 6 f .
                 . . f 6 6 6 f . .
                 . . . f f f . . .
             `;
             emptyImage = img`
                 . . . . . . . . .
                 . . . . . . . . .
                 . . . f f f . . .
                 . . f b b c f . .
                 . . f c b c f . .
                 . . f c c c f . .
                 . . . f f f . . .
                 . . . . . . . . .
                 . . . . . . . . .
             `;
            halfImage = img`
                . . . f . . . . .
                . . f 6 . . . . .
                . f 6 8 . . . . .
                f 6 8 1 . . . . .
                f 6 8 1 . . . . .
                f 6 8 8 . . . . .
                . f 6 8 . . . . .
                . . f 6 . . . . .
                . . . f . . . . .
            `;
        } else if (type == VitalType.Armor){
            fullImage = img`
                . f f . . . f f .
                f 1 b f . f 1 b f
                f b b b f b b b f
                f c b b b b b c f
                . f b b b b b f .
                . f b b b b b f .
                . f b b b b b f .
                . f b b b b b f .
                . f c c c c c f .
                . . f f f f f . .
            `;
            emptyImage = img`
    . f f . . . f f .
    f c c f . f c c f
    f c c c f c c c f
    f c c c c c c c f
    . f c c c c c f .
    . f c c c c c f .
    . f c c c c c f .
    . f c c c c c f .
    . f c c c c c f .
    . . f f f f f . .
            `;
            halfImage = img`
                . f f . . . f f .
                f 1 b f . f 1 b f
                f b b b f b b b f
                f c b b b b b c f
                . f b b b b b f .
                . f b b b b b f .
                . . . . . . . . .
                . . . . . . . . .
                . . . . . . . . .
                . . . . . . . . .
            `;
        }else {
           fullImage = img`
               5 5 5 5 5 5 5 5
               5 5 5 f f 5 5 5
               5 5 5 f f 5 5 5
               5 5 5 f f 5 5 5
               5 5 5 5 5 5 5 5
               5 5 5 f f 5 5 5
               5 5 5 5 5 5 5 5
           `;
emptyImage = img`
    7 5 5 5 5 3 5 5
    5 6 5 f 3 1 3 6
    5 5 7 f 6 3 6 5
    5 3 6 f 6 5 5 6
    3 1 3 6 5 6 5 5
    5 3 5 f f 5 7 5
    7 5 5 5 5 6 5 5
`;
            halfImage = img`
                5 5 5 5 5 5 5 5
                5 5 5 f f 5 5 5
                5 5 5 f f 5 5 5
                5 5 5 f f 5 5 5
                . . . . . . . .
                . . . . . . . .
                . . . . . . . .
            `;
        }
        if (filled) {
            fullImage = filled
        }
        if (empty) {
            emptyImage = empty
        }
        if (half) {
            halfImage = half
        }
        for (let i = 0; i < elements; i++) {
            let sprite = sprites.create(fullImage, SpriteKind.Player);
            sprite.setFlag(SpriteFlag.RelativeToCamera, true);
            sprite.x = 10 + i * 10;
            sprite.y = 10;
            statusBar.push(sprite);
        }

        // Store the status bar and images
        vitalicons.push(statusBar);
        statusBarFullImages.push(fullImage);
        statusBarEmptyImages.push(emptyImage);
        statusBarHalfImages.push(halfImage);

        return statusBar;
    }

    //% block="position $statusBar at x $x y $y"
    //% statusBar.shadow=variables_get
    export function positionStatusBar(statusBar: Sprite[], x: number, y: number) {
        for (let sprite of statusBar) {
            sprite.x = x + (sprite.x - 10);
            sprite.y = y;
        }
    }
    //% block="change $statusBar by $value change by $check"
    //% statusBar.shadow=variables_get
    export function changeStatusBar2(statusBar: Sprite[], value: number, check: INPUT) {
        let index = vitalicons.indexOf(statusBar);
        if (index == -1) return;

        let fullImage = statusBarFullImages[index];
        let emptyImage = statusBarEmptyImages[index];
        let halfImage = statusBarHalfImages[index];
        if (check == 1) {
            // Count how many hearts are currently full or half-full
            let filledCount = 0;
            let hasHalfHeart = false;

            for (let i = 0; i < statusBar.length; i++) {
                if (statusBar[i].image.equals(fullImage)) {
                    filledCount++;
                } else if (statusBar[i].image.equals(halfImage)) {
                    hasHalfHeart = true;
                }
            }

            // Calculate the total "health units" (full hearts count as 2, half hearts count as 1)
            let currentHealth = filledCount * 2 + (hasHalfHeart ? 1 : 0);
            let newHealth = Math.clamp(0, statusBar.length * 2, currentHealth + value);

            // Update the status bar based on the new health
            for (let i = 0; i < statusBar.length; i++) {
                if (newHealth >= 2) {
                    // Full heart
                    statusBar[i].setImage(fullImage);
                    newHealth -= 2;
                } else if (newHealth === 1) {
                    // Half heart
                    statusBar[i].setImage(halfImage);
                    newHealth -= 1;
                } else {
                    // Empty heart
                    statusBar[i].setImage(emptyImage);
                }
            }
        } else if (check == 0) {
            for (let index = 0; index < 2; index++) {
                // Count how many hearts are currently full or half-full
                let filledCount = 0;
                let hasHalfHeart = false;

                for (let i = 0; i < statusBar.length; i++) {
                    if (statusBar[i].image.equals(fullImage)) {
                        filledCount++;
                    } else if (statusBar[i].image.equals(halfImage)) {
                        hasHalfHeart = true;
                    }
                }

                // Calculate the total "health units" (full hearts count as 2, half hearts count as 1)
                let currentHealth = filledCount * 2 + (hasHalfHeart ? 1 : 0);
                let newHealth = Math.clamp(0, statusBar.length * 2, currentHealth + value);

                // Update the status bar based on the new health
                for (let i = 0; i < statusBar.length; i++) {
                    if (newHealth >= 2) {
                        // Full heart
                        statusBar[i].setImage(fullImage);
                        newHealth -= 2;
                    } else if (newHealth === 1) {
                        // Half heart
                        statusBar[i].setImage(halfImage);
                        newHealth -= 1;
                    } else {
                        // Empty heart
                        statusBar[i].setImage(emptyImage);
                    }
                }
            }
        }
    }
    //% block="get value of $vitalIcon"
    //% vitalIcon.shadow=variables_get
    export function getStatusBarValue(vitalIcon: Sprite[]): number {
        let index = vitalicons.indexOf(vitalIcon);
        if (index == -1) return 0;

        let fullImage = statusBarFullImages[index];
        let halfImage = statusBarHalfImages[index];
        let healthValue = 0;

        // Calculate health value based on full and half images
        for (let sprite of vitalIcon) {
            if (sprite.image.equals(fullImage)) {
                healthValue += 1; // Full heart adds 1
            } else if (sprite.image.equals(halfImage)) {
                healthValue += 0.5; // Half heart adds 0.5
            }
        }
        return healthValue;
    }
    //% block="attach $statusBar to $mySprite || with offseting $n"
    //% mySprite.shadow=variables_get
    //% statusBar.shadow=variables_get
    export function attach(mySprite: Sprite, statusBar: Sprite[],n?: number) {
        game.onUpdate(function () {
            for (let i = 0; i < statusBar.length; i++) {
                let sprite = statusBar[i];
                if (n) {
                    sprite.x = mySprite.x - 20 + (i * 10)
                    sprite.y = mySprite.y - 25 + 5 + n
                } else {
                sprite.x = mySprite.x - 20 + (i * 10); // Space them out horizontally
                sprite.y = mySprite.y - 25;
                }
            }
        });
    }
    //% block="set $vitalIcon to $value"
    //% vitalIcon.shadow=variables_get
    //% value.min=0 value.max=10
    export function setStatusBarValue(vitalIcon: Sprite[], value: number) {
        let index = vitalicons.indexOf(vitalIcon);
        if (index == -1) return;

        let fullImage = statusBarFullImages[index];
        let emptyImage = statusBarEmptyImages[index];

        // Ensure value stays within valid range
        let newValue = Math.clamp(0, vitalIcon.length, value);

        // Update each sprite in the status bar
        for (let i = 0; i < vitalIcon.length; i++) {
            if (i < newValue) {
                vitalIcon[i].setImage(fullImage); // Set to full image
            } else {
                vitalIcon[i].setImage(emptyImage); // Set to empty image
            }
        }
    }
    //% block="set $vitalIcon to $state"
    //% vitalIcon.shadow=variables_get
    //% state.defl=VitalIconState.Full
    export function setVitalIcon(vitalIcon: Sprite[], state: VitalIconState) {
        let index = vitalicons.indexOf(vitalIcon);
        if (index == -1) return;

        let fullImage = statusBarFullImages[index];
        let emptyImage = statusBarEmptyImages[index];
        let halfImage = statusBarHalfImages[index];

        for (let sprite of vitalIcon) {
            if (state == VitalIconState.Full) {
                sprite.setImage(fullImage);
            } else if (state == VitalIconState.Empty) {
                sprite.setImage(emptyImage);
            } else {
                sprite.setImage(halfImage)
            }
        }
    }

    //% block="set $vitalIcon $state to $image"
    //% image.shadow=screen_image_picker
    //% vitalIcon.shadow=variables_get
    export function setVitalIconImage2(vitalIcon: Sprite[], state: VitalIconState, image: Image) {
        let index = vitalicons.indexOf(vitalIcon);
        if (index == -1) return;

        let currentValue = getStatusBarValue(vitalIcon); // Store the current value

        // Update stored image reference
        if (state == VitalIconState.Full) {
            statusBarFullImages[index] = image;
        } else if (state == VitalIconState.Empty) {
            statusBarEmptyImages[index] = image;
        }else {
            statusBarHalfImages[index] = image;
        }

        // Loop through and apply the new image only to existing icons
        for (let i = 0; i < vitalicons[index].length; i++) {
            if (i < currentValue) {
                vitalicons[index][i].setImage(statusBarFullImages[index]);
            } else {
                vitalicons[index][i].setImage(statusBarEmptyImages[index]);
            }
        }
    }
}
