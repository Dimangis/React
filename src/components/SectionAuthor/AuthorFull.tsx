import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import { PostData } from 'components/common/SectionPostsList/PostData';
import styles from './AuthorFull.modules.css';
import testImage from '../../../public/img/Avatars/JF.jpg';
import FacebookIcon from '../../../public/img/SVG/Facebook.svg';
import TwitterIcon from '../../../public/img/SVG/Twitter.svg';
import InstagramIcon from '../../../public/img/SVG/Instagram.svg';
import YouTubeIcon from '../../../public/img/SVG/YouTube.svg';
import Text from 'components/common/Text/Text';

interface AuthorProps {
  //Благодаря такому синтаксису я передаю точную часть интерфейса PostData, а точнее url
  // означает тип объекта, который содержится в свойстве url объекта PostData.
  // Это делает код более гибким, и если вы измените тип url в PostData, то изменения также будут автоматически отражены в PostItem.tsx.

  userInfo: PostData['userInfo'];
}

// const AuthorFull: React.FC<AuthorProps> = () => {
const AuthorFull = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <div className={styles.imgContainer}>
          <PictureComponent jpgPath1x={testImage} altText="Test" borderRadius="100px" />
        </div>
        <div>
          <Text>Jonathan Doe</Text>
          <Text>Collaborator & Editor</Text>
        </div>
      </div>
      <Text variant="paragraph" element="p">
        Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a
        degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the
        impact technology has on our lives.
      </Text>
      <ul className={styles.socialLinkContainer}>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <FacebookIcon width={14} color="#fff" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <TwitterIcon height={12} color="#fff" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <InstagramIcon width={14} color="#fff" />
          </a>
        </li>
        <li className={styles.socialLink}>
          <a className={styles.aCorrect} href="http://" target="_blank" rel="noopener noreferrer">
            <YouTubeIcon height={12} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AuthorFull;
