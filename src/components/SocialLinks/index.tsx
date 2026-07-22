import IconInstagram from "@/assets/images/icon-instagram.png";
import IconFacebook from "@/assets/images/icon-facebook.png";
import IconTiktok from "@/assets/images/icon-tiktok.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";

const socialLinks = [
    { href: "#", icon: IconInstagram, name: "Instagram" },
    { href: "#", icon: IconFacebook, name: "Facebook" },
    { href: "#", icon: IconTiktok, name: "TikTok" },
    { href: "#", icon: iconWhatsapp, name: "Whatsapp" },

];

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}