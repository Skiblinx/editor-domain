const PrintLd = function () {
    if (process.env.NODE_ENV == "development") {
        const args = Array.from(arguments);
        // console.log(JSON.stringify(args.join(' ')));
    }
}

export default PrintLd;