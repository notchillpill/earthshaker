module.exports = {
    name: "gay",
    code: `
    $if[$isNumber[$mentioned[1]]==true]
    $title[O to obrazek]
    $color[BROWN]
    $image[https://some-random-api.ml/canvas/gay?avatar=$userAvatar[$mentioned[1]]&key=TdfPpuucCXBGXRDc7z4cwsn2F]

    $else

    $title[O to obrazek]
    $color[BROWN]
    $image[https://some-random-api.ml/canvas/gay?avatar=$authorAvatar&key=TdfPpuucCXBGXRDc7z4cwsn2F]
    $endif`
}