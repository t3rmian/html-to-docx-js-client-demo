module.exports = {
    resolve: {
        alias: {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url"),
            "buffer": require.resolve("buffer"),
            "util": require.resolve("util"),
            "zlib": require.resolve("browserify-zlib"),
            "assert": require.resolve("assert"),
            "fs": false,
            "path": false,
        },
    },
}