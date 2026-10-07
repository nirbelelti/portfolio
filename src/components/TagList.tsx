import '../styles/TagList.css';

interface TagListProps {
    tags: string[];
    label: string;
}

const TagList = ({tags, label}: TagListProps) => (
    <ul className="tag-list" aria-label={label}>
        {tags.map((tag) => (
            <li key={tag} className="tag-list__tag">{tag}</li>
        ))}
    </ul>
);

export default TagList;
