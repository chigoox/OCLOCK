import IMG from "public/Images/0A90A7F5-E6FC-421A-8A5D-9383ED7A1868.JPG";
import RawBundlesImage from '../public/Images/RawBundles.jpeg';
import RawLace from '../public/Images/RawLace.jpeg';
import RawTools from '../public/Images/RawTools.jpeg';
import RawWig from '../public/Images/RawWig.jpeg';


export const siteName = 'Shop by 5 O\'clock'
export const siteTag = 'For the Brave'
export const siteEmail = 'em.ed5productions@gmail.com'


export const NavBarVideoURL = '7FjL6i04_uY'
export const orderNumberPrefix = '5CK'
export const category = ['Hoodies', 'Shorts']

export const IGFeedURL = 'https://feeds.behold.so/JhZoahEX5QC6npL6BO7Y'

const img1 = 'https://images.unsplash.com/photo-1697644371824-41d4d0a8a12f?auto=format&fit=crop&q=80&w=3871&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const img2 = 'https://wwd.com/wp-content/uploads/2016/07/short-shorts-14.jpg?w=1280'
export const bannerImage = [img1, img2,'']

export const emailCollectorIMG = IMG

export const categoryLinks = category.map((category)=>{
    return category.replace(/\s/g, '')
})

export const HomePageCategoryImages = (category) =>{  
    switch (category) {
        case 'Luxury Wigs':
                return RawWig
            case 'Luxury Lace':
                return RawLace 
            case 'Luxury Bundles':
                return RawBundlesImage 
            case 'Hot Tools' :
                return RawTools
                case 'Hoodies' :
                return 'https://images.unsplash.com/photo-1548382983-7f844c6f5ed4?auto=format&fit=crop&q=80&w=2340&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                case 'Shorts' :
                return 'https://cutiebootsboutique.com/cdn/shop/products/GroceriesSnackShorts_1024x1024@2x.jpg?v=1632591666'

        default:
            return 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=2193&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
}
    
    
    
    
    
    
                            



//salePrice category type
