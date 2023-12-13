import { Github, Shapes, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "./newslettre";

const socialLinks = [
  { href: "https://github.com/ahmeds189", icon: Github },
  { href: "https://twitter.com/ahmeddotgg", icon: Twitter },
  {
    href: "https://linkedin.com/in/ahmeds189",
    icon: Linkedin,
  },
];

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/products", title: "Products" },
  { href: "/sell", title: "Start sell" },
];

const productsLinks = [
  { href: "/products?category=Icons", title: "Icons" },
  { href: "/products?category=Ui+Kits", title: "Ui Kits" },
  { href: "/products?category=Illustration", title: "Illustration" },
];

export default function Footer() {
  return (
    <footer className="border-t py-16">
      <div className="container space-y-14">
        <section className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg font-semibold md:text-2xl">
              Subscribe to our newsletter
            </p>
            <NewsletterForm />
          </div>
          <div className="flex gap-10 md:justify-end">
            <div className="flex w-min flex-col space-y-4 font-medium text-muted-foreground">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex w-min flex-col space-y-4 font-medium text-muted-foreground">
              {productsLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-wrap items-center gap-4">
          <Link href="/" className="inline-block">
            <Shapes className="block" size={38} />
          </Link>
          <p className="flex-1 whitespace-nowrap">
            &copy; Ashkal inc {new Date().getFullYear()}.
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank">
                  <link.icon />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </footer>
  );
}
