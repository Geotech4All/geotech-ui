import { AdminNavLink } from "@components/admin";
import { frontFacingNavUrl } from "@constants/frontFacing";

interface ClientNavLinksProps {
    className?: string;
}

export default function ClientNavLinks(props: ClientNavLinksProps){
    const { className } = props;
    return (
        <ul className={className}>
            {frontFacingNavUrl.map(url => (
              <AdminNavLink key={Math.random()}
                url={{ icon: url.icon, name: url.name, path: url.path}} />
            ))}
        </ul>
    );
};
