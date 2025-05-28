var floodFill = function(image, sr, sc, newColor) {

    // 颜色没有变化
    if (newColor === image[sr][sc]) {
        return image
    }

    // BFS 4个方向
    let q = [{x: sr, y: sc}], 
        row = image.length,
        col = image[0].length,
        dx = [1,-1,0,0],
        dy = [0,0,1,-1],
        startColor = image[sr][sc]

    while (q.length !== 0) {
        let {x, y} = q.shift()

        image[x][y] = newColor

        for (let i=0; i<4; i++) {
            let newX = x + dx[i], newY= y + dy[i]

            if (newX >=0 && newX < row && newY >=0 && newY < col && startColor === image[newX][newY]) {
                q.push({x: newX, y: newY})
            }
        }
    }

    return image
};