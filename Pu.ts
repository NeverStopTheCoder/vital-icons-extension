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
        Empty
        }

    let vitalicons: Sprite[][] = [];
    let statusBarFullImages: Image[] = [];
    let statusBarEmptyImages: Image[] = [];
    //% block="create $type status bar with $elements elements || and custom filled $filled and custom empty $empty"
    //% blockSetVariable=VitalIcon
    //%filled.shadow=screen_image_picker
    //%empty.shadow=screen_image_picker
    export function createStatusBar(type: VitalType, elements: number, filled?: Image, empty?: Image): Sprite[] {
        let statusBar: Sprite[] = [];

        // Define images based on type
    let fullImage: Image
    let emptyImage: Image

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
        }
        if (filled) {
            fullImage = filled
        }
        if (empty) {
            emptyImage = empty
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
    //% block="change $statusBar by $value"
    //% statusBar.shadow=variables_get
    //% value.min=-10 value.max=10
    export function changeStatusBar2(statusBar: Sprite[], value: number) {
        let index = vitalicons.indexOf(statusBar);
        if (index == -1) return;

        let fullImage = statusBarFullImages[index];
        let emptyImage = statusBarEmptyImages[index];

        // Count how many hearts are currently full
        let filledCount = 0;
        for (let i = 0; i < statusBar.length; i++) {
            if (statusBar[i].image.equals(fullImage)) {
                filledCount++;
            }
        }

        // Apply change
        let newCount = Math.clamp(0, statusBar.length, filledCount + value);

        for (let i = 0; i < statusBar.length; i++) {
            if (i < newCount) {
                statusBar[i].setImage(fullImage);
            } else {
                statusBar[i].setImage(emptyImage);
            }
        }
    }
    //% block="get value of $vitalIcon"
    //% vitalIcon.shadow=variables_get
    export function getStatusBarValue(vitalIcon: Sprite[]): number {
        let index = vitalicons.indexOf(vitalIcon);
        if (index == -1) return 0;

        let fullImage = statusBarFullImages[index];
        let filledCount = 0;

        // Count the number of full images remaining
        for (let sprite of vitalIcon) {
            if (sprite.image.equals(fullImage)) {
                filledCount++;
            }
        }
        return filledCount;
    }
    //% block="attach $statusBar to $mySprite"
    //% mySprite.shadow=variables_get
    //% statusBar.shadow=variables_get
    export function attach(mySprite: Sprite, statusBar: Sprite[]) {
        game.onUpdate(function () {
            for (let i = 0; i < statusBar.length; i++) {
                let sprite = statusBar[i];
                sprite.setFlag(SpriteFlag.RelativeToCamera,false)
                sprite.x = mySprite.x - 20 + (i * 10); // Space them out horizontally
                sprite.y = mySprite.y - 25;
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

        for (let sprite of vitalIcon) {
            if (state == VitalIconState.Full) {
                sprite.setImage(fullImage);
            } else {
                sprite.setImage(emptyImage);
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
        } else {
            statusBarEmptyImages[index] = image;
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
