import axios from "axios";

const url = 'http://localhost:5000/api/ip-details/';
// 128.101.101.101

class IpServices {
    /**
     * Get ip details
     * 
     * @param {String} ip
     * 
     * @returns {Promise}
     */
    static search(ip) {
        return new Promise((resolve, reject) => {
            try {
                const data = JSON.stringify({ip: ip});
                const config = {
                    headers: {'Content-Type': 'application/json'}
                }

                let res = axios.post(url, data, config);
                resolve(res);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default IpServices;