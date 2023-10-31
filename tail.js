const kolobok = (name) => {
    switch (name) {
        case 'дедушка':
            console.log('я от дедушки ушел');
            break;
        case 'заяц':
            console.log('я от зайца ушел');
            break;
        case 'лиса':
            console.log('меня съели');
            break;
    }
}

kolobok('дедушка');
kolobok('заяц');
kolobok('лиса');

const newYear = (name1) => {
    switch (name1) {
        case 'Дед Мороз':
            console.log(`"Дед Мороз! Дед Мороз! Дед Мороз!"`);
            break;
        case 'Снегурочка':
            console.log(`"Снегурочка! Снегурочка! Снегурочка!"`)
    }
}
newYear ('Дед Мороз');
newYear ('Снегурочка');