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
    filters() {
        // filter category
        const queryCopy = {...this.queryStr};
        const removeFields = ["keyword", "page", "limit"];
        //removing some fields for category
        removeFields.forEach((key) => delete queryCopy[key]);
        // filter for Price
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/gi, (key) => `$${key}`);
        
        this.query = this.query.find(JSON.parse(queryStr));
        return this
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = (currentPage - 1) * resultPerPage;
        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = Apifeatures;