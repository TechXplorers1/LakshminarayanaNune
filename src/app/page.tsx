
'use client';

import {
  ArrowDown,
  Award,
  Book,
  Bot,
  BrainCircuit,
  Briefcase,
  Code,
  Database,
  KanbanSquare,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Rocket,
  ShieldCheck,
  Star,
  Users,
  Users2,
} from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { ThemeToggle } from '@/components/theme-toggle';
import { Footer } from '@/components/footer';
import { useEffect } from 'react';

const navLinks = [
  'Home',
  'About',
  'Expertise',
  'Courses',
  'Projects',
  'Testimonials',
  'Contact',
];

const expertise = [
  {
    icon: Star,
    title: 'Top-Rated Agile Trainer',
    description:
      'Recognized as a top-rated trainer in 2023, with a 4.8-star average from over 1,200 reviews and 5,000+ students trained.',
  },
  {
    icon: Award,
    title: 'Certified Scrum Trainer',
    description:
      'Holding numerous credentials, including from Scrum Alliance and Scrum.org, affirming my standing in the Agile community.',
  },
  {
    icon: Users2,
    title: '100+ Teams Coached',
    description:
      'Successfully coached over 100 teams in Agile practices, underscoring deep industry experience beyond individual courses.',
  },
  {
    icon: Briefcase,
    title: '25 Years of Experience',
    description:
      'Bringing 25 years of global IT and coaching experience to deliver practical, impactful training and consulting.',
  },
  {
    icon: Network,
    title: 'Global Job Network',
    description:
      'Founder of a 5,000+ member Telegram group for sharing global job opportunities and free tech webinars.',
  },
  {
    icon: Rocket,
    title: 'Career Impact',
    description:
      'My training programs are designed to transform careers, with many graduates now working at top tech companies.',
  },
];

const courses = [
  { icon: Users, title: 'Scrum Master & Product Owner' },
  { icon: Database, title: 'Azure Data Engineer' },
  { icon: BrainCircuit, title: 'Data Analyst (Power BI + MySQL)' },
  { icon: ShieldCheck, title: 'Quality Assurance / Manual Testing' },
  { icon: Briefcase, title: 'Technical Business Analysis' },
  { icon: ShieldCheck, title: 'Cybersecurity (hands-on tools)' },
  { icon: Users2, title: 'SAFe Agilist (6.0)' },
  { icon: Code, title: 'Hands-On DevOps (DevSecOps)' },
  { icon: Code, title: 'Python Programming' },
  { icon: Bot, title: 'Machine Learning' },
  { icon: Bot, title: 'Zen AI (GenAI)' },
  { icon: BrainCircuit, title: 'Data Science' },
  { icon: Bot, title: 'Artificial Intelligence' },
  { icon: KanbanSquare, title: 'Scrum & Kanban' },
  { icon: Book, title: 'Agile & Scrum Fundamentals' },
];


const portfolioHighlights = [
  {
    title: '600+ Six-Figure Offers',
    description:
      'Proud to have helped over 600 graduates secure high-paying, six-figure job offers after completing their training. My programs include built-in CV preparation and LinkedIn profile support to ensure career success.',
    image: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'business success chart',
    tags: ['Career Placement', 'High-Value Jobs', 'Student Success'],
  },
  {
    title: 'Graduates at Top Tech Companies',
    description:
      'Many of our graduates have successfully transitioned into roles at top tech companies and research institutions. This demonstrates the broad industry recognition and impact of our training programs.',
    image: 'https://images.unsplash.com/photo-1627556704283-452301a45fd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'person coding',
    tags: ['Industry Impact', 'Graduate Success', 'Tech Careers'],
  },
  {
    title: 'Global Job & Support Network',
    description:
      'I run a Telegram group with over 5,000 members, creating a vibrant community for sharing remote/global job opportunities, a free tech webinars, and providing ongoing support for students worldwide.',
    image: 'https://plus.unsplash.com/premium_photo-1723618952699-58622c3ac9d7?q=80&w=1104&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hint: 'global network connections',
    tags: ['Community', 'Job Network', 'Global Support'],
  },
];

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lakshmi@1hac.com',
    href: 'mailto:lakshmi@1hac.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/lakshminarayana-nune',
    href: 'https://www.linkedin.com/in/lakshminarayana-nune-36ba78106/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Melbourne (Remote & Global)',
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-3 mr-4">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-md font-bold text-lg">
              LN
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">
              Lakshminarayana Nune
            </span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              {navLinks.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  key={link}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="grid gap-4 py-6">
                    {navLinks.map((link) => (
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        key={link}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="relative container mx-auto px-4 md:px-6 py-20 md:py-32 fade-in-section"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                <span className="font-light">Hi, I'm</span> Lakshminarayana Nune
              </h1>
              <h2 className="text-3xl md:text-4xl font-medium text-primary">
                Agile Coach &amp; Director
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                As the Director of Hands-On Agile Coaching, I leverage 25 years of global IT experience to help organizations and individuals achieve success through expert-led, practical training.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button size="lg">Get in Touch</Button>
                </a>
                <a href="#projects">
                  <Button size="lg" variant="outline">
                    View Projects
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://github.com/1Neelamsaikrishna/pics/blob/main/Firefly%2020250804185718%20(1).png?raw=true"
                alt="Lakshminarayana Nune"
                width={500}
                height={500}
                className="rounded-full border-8 border-card shadow-2xl"
                data-ai-hint="portrait man"
              />
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-bounce shadow-lg">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </a>
        </section>

        <section
          id="about"
          className="bg-card/50 py-20 md:py-32 fade-in-section"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-lg text-muted-foreground">
                I am the Director and an Agile Trainer at Hands-On Agile
                Coaching (HAC), a Melbourne-based firm I lead to help individuals and
                organizations achieve success through expert-led training. With
                extensive experience as an Agile Coach, I specialize in improving
                organizational culture and fostering high-performing teams. My approach
                is centered on continuous improvement and collaboration, providing
                customized strategies to facilitate a smooth transition to agile
                methodologies.
              </p>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="py-20 md:py-32 fade-in-section"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
              My Expertise
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card
                  key={index}
                  className="text-center p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card/50"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="courses" className="bg-card/50 py-20 md:py-32 fade-in-section">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
              Training Courses Offered
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="text-center p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card/50 flex flex-col items-center justify-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-3">
                      <course.icon className="h-7 w-7 text-primary" />
                    </div>
                  <h3 className="text-base font-bold text-center">{course.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-20 md:py-32 fade-in-section"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
              Portfolio Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioHighlights.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={item.hint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-base text-muted-foreground mb-4">
                      {item.description}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="bg-card/50 py-20 md:py-32 fade-in-section"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center tracking-tight mb-12">
              What My Clients Say
            </h2>
            <TestimonialsCarousel />
          </div>
        </section>
        <section
          id="contact"
          className="py-20 md:py-32 fade-in-section"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center space-y-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-primary mt-2 text-xl font-semibold">Let's start a conversation</p>
              </div>
              <div className="flex justify-center">
                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                          <detail.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-left">{detail.label}</h4>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-muted-foreground hover:text-primary transition-colors text-left block"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-base text-muted-foreground text-left">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
