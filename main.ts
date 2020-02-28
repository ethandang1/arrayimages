let count = 0
let bat = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let list = [img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`, img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c b 1 b b b 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . c c . c c . . . . . . . . 
. . f 3 c c 3 c c c . . . . . . 
. f c 3 b c 3 b c c c . . . . . 
f c b b b b b b b b f f . . . . 
c c 1 b b b 1 b b b f f . . . . 
c b b b b b b b b c f f f . . . 
c b 1 f f 1 c b b f f f f . . . 
f f 1 f f 1 f b c c b b b . . . 
f f f f f f f b f c c c c . . . 
f f 2 2 2 2 f b f b b c c c . . 
. f 2 2 2 2 2 b c c b b c . . . 
. . f 2 2 2 b f f c c b b c . . 
. . . f f f f f f f c c c c c . 
. . . . . . . . . . . . c c c c 
`, img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c 1 1 b b b 1 1 b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`]
game.onUpdateInterval(100, function () {
    bat.setImage(list[count])
    if (count < 8) {
        count += 1
    } else {
        count = 0
    }
})
