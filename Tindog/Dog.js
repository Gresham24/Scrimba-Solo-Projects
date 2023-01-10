
class Dog {
    constructor(data) {
        Object.assign(this, data);
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool;
        this.hasBeenSwiped = true;
    }

    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
        <div id="post-img" class="post-img">
            <img src=${avatar}>
        </div>
        <div class="user-info">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
        </div>
        `
    }
}


export default Dog;