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
import Profile from '../assets/lakshminarayanaprofile.png';
import Job from '../assets/job.png';
import Graduation from '../assets/graduation.png';
import Global from '../assets/global.png';

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
    image: Job,
    hint: 'business success chart',
    tags: ['Career Placement', 'High-Value Jobs', 'Student Success'],
  },
  {
    title: 'Graduates at Top Tech Companies',
    description:
      'Many of our graduates have successfully transitioned into roles at top tech companies and research institutions. This demonstrates the broad industry recognition and impact of our training programs.',
    image: Graduation,
    hint: 'person coding',
    tags: ['Industry Impact', 'Graduate Success', 'Tech Careers'],
  },
  {
    title: 'Global Job & Support Network',
    description:
      'I run a Telegram group with over 5,000 members, creating a vibrant community for sharing remote/global job opportunities, a free tech webinars, and providing ongoing support for students worldwide.',
    image: Global,
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
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-md font-bold text-lg">
              LN
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">
              Lakshminarayana Nune
            </span>
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
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
            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm">
              {navLinks.map((link) => (
                <a
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  key={link}
                  className="font-medium hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          id="home"
          className="relative container mx-auto px-4 py-16 sm:py-24 md:py-32 fade-in-section"
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
                <span className="font-light">Hi, I'm</span> Lakshminarayana Nune
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary">
                Agile Coach &amp; Director
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto md:mx-0">
                As the Director of Hands-On Agile Coaching, I leverage 25 years of global IT experience to help organizations and individuals achieve success through expert-led, practical training.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto">Get in Touch</Button>
                </a>
                <a href="#projects">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Projects
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={Profile}
                alt="Lakshminarayana Nune"
                width={400}
                height={400}
                className="rounded-full border-8 border-card shadow-2xl w-full max-w-[300px] sm:max-w-[400px]"
                data-ai-hint="portrait man"
              />
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-10"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center transition-transform duration-300 hover:scale-110 animate-bounce shadow-lg">
              <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
          </a>
        </section>

        {/* About */}
        <section id="about" className="bg-card/50 py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                I am the Director and an Agile Trainer at Hands-On Agile Coaching (HAC), a Melbourne-based firm I lead to help individuals and organizations achieve success through expert-led training. With extensive experience as an Agile Coach, I specialize in improving organizational culture and fostering high-performing teams. My approach is centered on continuous improvement and collaboration, providing customized strategies to facilitate a smooth transition to agile methodologies.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-8 sm:mb-12">
              My Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <Card
                  key={index}
                  className="text-center p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card/50"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="bg-card/50 py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-8 sm:mb-12">
              Training Courses Offered
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="text-center p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-card/50 flex flex-col items-center justify-center"
                >
                  <div className="p-2.5 bg-primary/10 rounded-full mb-2">
                    <course.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-center">{course.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-8 sm:mb-12">
              Portfolio Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioHighlights.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="overflow-hidden h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={item.hint}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-2">
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      {item.description}
                    </p>
                  </CardContent>
                  <div className="px-6 pb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs sm:text-sm">
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

        {/* Testimonials */}
        <section id="testimonials" className="bg-card/50 py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight mb-8 sm:mb-12">
              What My Clients Say
            </h2>
            <div className="max-w-4xl mx-auto">
              <TestimonialsCarousel />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24 md:py-32 fade-in-section">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in Touch</h2>
                <p className="text-primary mt-2 text-lg sm:text-xl font-semibold">
                  Let's start a conversation
                </p>
              </div>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-primary/10 text-primary p-2.5 rounded-full">
                        <detail.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-lg">{detail.label}</h4>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}