var isInterleave = function(s1, s2, s3) {
    let n1= s1.length
    let n2 = s2.length
    if (n1+n2!=s3.length) return false

    let dp = Array.from(new Array(n1+1), () => new Array(n2+1))
    dp[0][0] = true
    // 初始化
    for(let i=1;i<=n1;i++) {
        dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1]
    }
    for(let i=1;i<=n2;i++) {
        dp[0][i] = dp[0][i-1] && s2[i-1] == s3[i-1]
    }

    for(let i =1;i<=n1;i++) {
        for(let j=1;j<=n2;j++) {
            dp[i][j] = dp[i-1][j] && s1[i-1] == s3[i-1+j] || dp[i][j-1] && s2[j-1] ==s3[i+j-1]
        }
    }

    // s1的前i项，当前项就是 s1[i-1] 
    return dp[n1][n2]
};