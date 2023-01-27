module.exports = function reverse(num) {
    var myArr = String(num)
        .split("")
        .reverse()
        .map((num) => {
            return Number(num).toString();
        });
    return myArr.join("");
};
