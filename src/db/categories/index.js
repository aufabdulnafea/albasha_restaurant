import SweetsImage from '../../static/images/categories/sweets.jpg'

// categories names
// the name is going to be used in order to filter the product, thus the same name should be used as an attribute to every product
// names manakish
const categories = [
    {
        name: 'manakish',
        title: {
            english: 'Manakish',
            arabic: 'مناقيش',
            german: 'Manakisch'
        },
        img: SweetsImage
    },

    {
        name: 'pizza',
        title: {
            english: 'Pizza',
            arabic: 'بيتزا',
            german: 'Pizza'
        },
        img: SweetsImage
    },
    {
        name: 'sandwiches',
        title: {
            english: 'Sandwiches',
            arabic: 'صندويش',
            german: 'Sandwiches'
        },
        img: SweetsImage
    },
    {
        name: 'dishes',
        title: {
            english: 'Dishes',
            arabic: 'الأطباق',
            german: 'Gerichte'
        },
        img: SweetsImage
    },
    {
        name: 'starters',
        title: {
            english: 'Starters',
            arabic: 'المقبلات',
            german: 'Vorspeisen'
        },
        img: SweetsImage
    },
    {
        name: 'drinks',
        title: {
            english: 'Drinks',
            arabic: 'المشروبات',
            german: 'Getränke'
        },
        img: SweetsImage
    },
    {
        name: 'sweets',
        title: {
            english: 'Sweets & Ice cream',
            arabic: 'الحلويات والبوظة',
            german: 'Süßigkeiten & Eis'
        },
        img: SweetsImage
    }
]

export default categories