import React, {useState} from "react";
import styles from "../../pages/article.module.scss";
import ContentLoader from "react-content-loader"

const ProjectImage = ({src, alt})=>{
    const [isLoaded, setIsLoaded] = useState(false);
    const img = new Image()
    img.src = `../../static/img/${src}`

    return(
        <div className={styles["showcase"]}>
            {!isLoaded && <ImageLoader/>}
            <img style={{display: isLoaded ? "block" : "none"}} className={styles["main-pic"]} src={require(`../../static/img/${src}`)} alt={alt} onLoad={()=>setIsLoaded(true)}/>
            <div className={styles["caption"]}>
                {alt}
            </div>
        </div>
    )
}

export const ImageLoader = props =>{
    return(
        <ContentLoader height={300}
                       width={"100%"}
                       speed={2}
                       primaryColor="#d9d9d9"
                       secondaryColor="#ecebeb"
                       {...props}
        >
            <rect width="100%" height="100%" />
        </ContentLoader>
    )
}

export default ProjectImage