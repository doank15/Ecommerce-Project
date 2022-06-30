class Apifeatures {
    // make constructor with 2 arg query and queryStr
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                // Mongo Regex
                $regex: this.queryStr.keyword,
                $options: "i"
            }
        } : {};
        this.query = this.query.find({...keyword});
        return this;
    }
}

module.exports = Apifeatures;