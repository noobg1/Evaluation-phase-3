const  getNoramlizedRating = (rating) => {
    //console.log(rating)
    if (rating <= 2) {
        return '#FF1744'
    } else if (rating > 2 && rating < 5) {
        return '#90CAF9'
    } else {
        return '#1DE9B6'
    }

}
module.exports = {getNoramlizedRating}