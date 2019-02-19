function normalize (funs) {
    if ( funs instanceof Array ) {
        return funs;
    } else {
        return [funs];
    }
}
function flagMap (flags) {
    let options = {}
    if ( typeof flags === 'string' ) {
        flags.split(/\s/).forEach((flag) => {
            switch (flag) {
                case 'once':
                    options.once = true;
                    break;
                case 'unique':
                    options.unique = true;
                    break;
            }
        });
    }
    return options;
}
function findIndex (list, fun) {
    for ( let i = 0; i < list.length; i++ ) {
        if ( list[i].fun === fun ) {
            return i;
        }
    }
    return -1;
}

export default class {
    constructor (funs, flags) {
        this.list = [];
        if (funs) {
            this.push(funs, flags)
        }
    }
    push (funs, flags) {
        if ( !this.list ) return false;
        let options = flagMap(flags);
        let funsArr = normalize(funs);
        for ( let i = 0; i < funsArr.length; i++ ) {
            if ( !options.unique || findIndex(this.list, funsArr[i]) < 0 ) {
                this.list.push({
                    fun: funsArr[i],
                    ...options
                });
            }
        }
        return this.list.length;
    }
    remove (funs) {
        if ( !this.list ) return false;
        let funsArr = normalize(funs);
        for ( let i = 0; i < this.funsArr.length; i++ ) {
            let index = findIndex(this.list, funsArr[i]);
            if ( index >= 0 ) {
                this.list.splice(index, 1);
            }
        }
        return this.list.length;
    }
    invoke (...args) {
        if ( !this.list ) return false;
        let list = this.list.reverse();
        for ( let i = list.length - 1; i >= 0; i-- ) {
            list[i].fun(...args);
            if ( list[i].once ) {
                list.splice(i, 1);
            }
        }
    }
    destroy () {
        this.list = null;
    }
}