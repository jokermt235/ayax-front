<script>
import Layout from "../components/layout/layout";
import container from '../components/layout/container'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import BlogItem from '../components/blocks/blogItem/blogItem'
import BlogFrom from '../components/blocks/blogBanner/blogBanner'
import BlogSoc from '../components/blocks/blogSoc/blogSoc'
import articleblogNav from '../components/blocks/articleblogNav/articleblogNav.vue'
import jwCustom from '../components/jwpagination/jw-custom'





/*const items = [
    {
        blogDay:  '1',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '2',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '3',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '4',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '5',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '6',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '7',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '8',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },{
        blogDay:  '9',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '10',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '11',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '12',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '13',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '15',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '16',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '17',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '18',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '19',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '20',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '21',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '22',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '23',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '24',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '25',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '26',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '27',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '28',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '29',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '30',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '31',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '32',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '1',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '2',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '3',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '4',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '5',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '6',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '7',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '8',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },{
        blogDay:  '9',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '10',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '11',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '12',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '13',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '15',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '16',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '17',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '18',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '19',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '20',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '21',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '22',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '23',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '24',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '25',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '26',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '27',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '28',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '29',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '30',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '31',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    {
        blogDay:  '32',
        blogMonth: 'декабрь',
        blogYear: '2021',
        blogTitle: 'Сделки с недвижимостью по контролем: кому и чем грозит “антиотмывочный” закон',
        blogViews: '1.3K',
        blogShares: '125',
        blogHash: '#законодательство',
        blogLink: '/articledetail',
        blogImage: 'https://laminart.com.ua/wp-content/uploads/2021/03/185_n_cottodeste-black-white-black-minimale.jpg',
    },
    
]*/
const perPage = 4

const customStyles = { 
    a: {
        display: 'flex',
        alignItems: 'center',
        padding: '0'
    }
};

export default {
    name: 'App',
    props: {
    },
    components: {
        container,
        Layout,
        Breadcrumbs,
        articleblogNav,
        BlogItem,
        BlogFrom,
        BlogSoc,
        jwCustom
    },
    data() {
        return {
            customStyles,
            perPage,
            loadMoreActive: true,
            loadedMore: [],
            offsets : [],
            customLabels : {
                first: '1',
                last: '',
                previous: '<',
                next: '>'
            },
            blockShare: {
                times: 3,
            },
            blockSubscribe: {
                times: 3,
            },

            fetchedText: '<p>Хотите купить квартиру в Краснодаре? В базе агентства Аякс подобраны только реальные объявления. Цены от&nbsp;<b>300 000</b>&nbsp;до&nbsp;<b>60 000 000</b>&nbsp;рублей. Средняя стоимость метра&nbsp;<b>75 329</b>&nbsp;руб.&nbsp; Есть квартиры площадью до&nbsp;<b>371</b>&nbsp;м². Лучшие предложения по Краснодару с адресами, фото, планировками и ценами. <b>Гарантируем юридическую безопасность сделки</b>.</p>',
        }
    },
    methods: {
        onChangePage(pageOfItems) {
            this.loadedMore = []
            const paginItems = document.querySelectorAll('.page-item.active')
            Array.prototype.forEach.call(paginItems, function(el, i){
                el.classList.remove('active')
            });
            this.offsets = pageOfItems;
        },
        loadMore() {
            const allActiveted = document.querySelectorAll('.page-item.active');
            const lastActiveted = allActiveted[allActiveted.length - 1].innerText;
            const newLoads = lastActiveted * perPage;
            const checkDots = allActiveted[allActiveted.length - 1].nextElementSibling.classList.contains('pagination-dots');
            if(newLoads < this.pageOfItems.length && !checkDots ) {
                for(var i = newLoads; i < newLoads + perPage; i++) {
                    this.loadedMore.push(this.pageOfItems[i])
                }
                allActiveted[allActiveted.length - 1].nextElementSibling.classList.add('active');
            }

            if(newLoads + perPage + 1 >= this.pageOfItems.length || !checkDots) {
                this.loadMoreActive = false;
            }
        }
    },
    mounted(){
        this.$store.dispatch('articles/list');
    },
    computed : {
        pageOfItems(){
            this.customLabels.last  = (this.$store.getters['articles/records'].length / perPage).toFixed();
            let items = this.$store.getters['articles/records'].map(item=>{
                let months = ["Январь","Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
                let date = new Date(item.updated_at);
                return {
                    blogDay:  date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
                    blogMonth: months[date.getMonth()],
                    blogYear: date.getFullYear(),
                    blogTitle:  item.title,
                    blogViews:  item.reviews != null ? item.reviews : 'Пусто' ,
                    blogShares: item.shares != null ? item.shares : 'Пусто',
                    blogHash: item.hashtag != null ? item.hashtag : 'Пусто',
                    blogLink: '/articledetail/' + item.url,
                    blogImage: item.image,
                }
            });
            if(items){
                this.offsets = items;
            }

            return items;
        }
    }

}

</script>

<template lang="pug">
    Layout(classes="nopadding")
        Breadcrumbs
        articleblogNav
        container
            .col
                ul.articleblog-list
                    template(v-for="(item, index) in offsets")
                        BlogItem(classes="articleblog-subitem"  :blogData="item")
                        template(v-if="index === 2 ")
                            BlogFrom
                        template(v-if="index === 5")
                            BlogSoc
                    template(v-if="loadedMore.length > 0" v-for="(item, index) in loadedMore")
                        BlogItem(classes="articleblog-subitem"  :blogData="item")
        jwCustom(:items="pageOfItems" :styles="customStyles" @changePage="onChangePage" :labels="customLabels" :pageSize="perPage" :maxPages="4" )
        container
            .col
                .btn-readmore(@click="loadMore()" :class="loadMoreActive ? '' : 'disabled'")
                    button Читать больше
</template>
