class Utils {
    syncPromise(data){
        return new Promise((resolve) => resolve(data));
    }
}

module.exports = new Utils;