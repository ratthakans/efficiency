import Image from 'next/image';

/**
 * A member of the studio: the photo they supplied, their name in Thai and
 * English, their role. Nothing else is inferred or added.
 */
export default function PersonCard({ person }) {
  return (
    /* the id is what the JSON-LD Person @id points at (/studio#key) */
    <figure className="person m-0" id={person.key}>
      <div className="person__photo">
        <Image
          src={person.photo}
          alt={`${[person.nameTh, person.nameEn].filter(Boolean).join(' · ') || person.role} ${person.role} ของ EFFICIENCY`}
          fill
          sizes="(max-width: 40rem) 90vw, 280px"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        />
      </div>
      <figcaption className="mt-4">
        {/* Thai name leads when there is one; otherwise the English name */}
        <p className="person__name">{person.nameTh || person.nameEn || person.role}</p>
        {(person.nameTh || person.nameEn) && (
          <p className="label mt-1">
            {person.nameTh && person.nameEn ? `${person.nameEn} · ` : ''}
            {person.role}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
