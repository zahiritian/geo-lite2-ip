const Reader = require("@maxmind/geoip2-node").Reader;

class Geo2Ip {
    /**
     * Get ip details
     * 
     * @param {String} ip
     * 
     * @returns {Promise}
     */
    static getIpDetails(ip) {
        return new Promise((resolve, reject) => {
            return Reader.open("./server/db/GeoLite2-City.mmdb")
                .then(res => {
                    let data = [];
                    let ips = ip.split(',');
                    ips.map(val => {
                        let ab = res.city(val.replace(/\s/g, ''));
                        if (ab) {
                            data.push(ab);
                        }
                    });

                    if (data?.length) {
                        return resolve(data);
                    }

                    throw { message: "invalid ip address" };
                })
                .catch(err => {
                    return reject(err.message);
                });
        });
    };
}

module.exports.default = Geo2Ip;