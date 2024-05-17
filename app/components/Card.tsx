import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

function generateSlug(name: string): string {
  return name
    .replace(/&/g, 'and') // Replace '&' with 'and'
    .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

interface CardProps {
  imageSrc: string;
  displayName: string; // For displaying
  originalName: string; // For linking
  basePath: string;
}

export default function Card({ imageSrc, displayName, originalName, basePath }: CardProps) {
  const slug = generateSlug(originalName); // Use original name for the URL

  return (
    <Link href={`/${basePath}/${slug}`}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={imageSrc}
            alt={displayName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.cardText}>
          <h3 className="text-lg text-black">{displayName}</h3>
        </div>
      </div>
    </Link>
  );
}
