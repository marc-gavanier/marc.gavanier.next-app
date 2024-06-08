import { ResumeSchema } from '@/types';
import dayjs from 'dayjs';

type Work = NonNullable<ResumeSchema['work']>[number];

const canDisplayWorkHeader = (work: Work): boolean =>
  work.name != null || work.location != null || work.position != null || work.startDate != null || work.endDate != null;

const canDisplayHeaderMetadata = (work: Work) => work.position || work.startDate || work.endDate;

const WorkName = ({ url, name }: { url: string | undefined; name: string | undefined }) =>
  url ? (
    <a href={url} target='_blank' rel='noreferrer' className='text-decoration-none'>
      {name}
    </a>
  ) : (
    name
  );
const WorkDates = ({ startDate, endDate }: { startDate: string | undefined; endDate: string | undefined }) =>
  startDate && (
    <span className='ms-auto'>
      {endDate == null && 'Since '}
      {startDate && dayjs(new Date(startDate)).format('MM/YYYY')}
      {endDate && <> - {dayjs(new Date(endDate)).format('MM/YYYY')}</>}
    </span>
  );

const WorkHighlights = ({ highlights = [] }: { highlights: string[] | undefined }) =>
  highlights.length > 0 && (
    <ul className='d-inline-flex list-unstyled gap-1 mb-0'>
      {highlights?.map((highlight: string) => (
        <li key={highlight}>
          <span className='badge rounded-pill text-bg-primary'>{highlight}</span>
        </li>
      ))}
    </ul>
  );

export const Work = (work: Work) => (
  <>
    {canDisplayWorkHeader(work) && (
      <div className='d-flex flex-column-reverse'>
        {(work.name || work.location) && (
          <h3 className='my-2 h5'>
            <WorkName name={work.name} url={work.url} />
            {work.name && work.location && <> ❘ </>}
            {work.location}
          </h3>
        )}
        {canDisplayHeaderMetadata(work) && (
          <div className='lead d-flex align-items-baseline justify-content-between'>
            {work.position}
            <WorkDates startDate={work.startDate} endDate={work.endDate} />
          </div>
        )}
      </div>
    )}
    <p className='my-2'>{work.summary}</p>
    {work.description && <p className='text-muted small my-2'>{work.description}</p>}
    <WorkHighlights highlights={work.highlights} />
  </>
);
