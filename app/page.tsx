import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, Linkedin, Github, ExternalLink, Download } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Hamza Saeed</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <Button asChild size="sm">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">IT Support Engineer & Data Analyst</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Providing expert technical support and data-driven solutions to optimize your IT infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <a href="#contact">Hire Me</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#" download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Hamza Saeed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Highly skilled IT Support Engineer with extensive experience in providing technical support, system
                administration, and cloud services. Proven track record of resolving complex technical issues and
                optimizing IT infrastructure for diverse clients, including businesses in the Managed Service Provider
                (MSP) environment.
              </p>
              <p className="text-lg">
                Proficient in Windows desktop and server environments, Office 365, Azure, and network troubleshooting. A
                strong communicator with a customer-focused approach and expertise in delivering tailored IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Operating Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Windows Desktop</Badge>
                  <Badge>Windows Server</Badge>
                  <Badge>Active Directory</Badge>
                  <Badge>Group Policy</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Office 365</Badge>
                  <Badge>Azure VMs</Badge>
                  <Badge>Azure Storage</Badge>
                  <Badge>Azure Networking</Badge>
                  <Badge>Azure Security</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Network Troubleshooting</Badge>
                  <Badge>Telephony Systems</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>R</Badge>
                  <Badge>SQL</Badge>
                  <Badge>Java</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Tableau</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>CI/CD Pipelines</Badge>
                  <Badge>Jupyter Notebook</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>IT Infrastructure</Badge>
                  <Badge>System Upgrades</Badge>
                  <Badge>Security Configurations</Badge>
                  <Badge>Technical Documentation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>IT Support Specialist</CardTitle>
                      <CardDescription>Freelance IT Consultant (Fiverr)</CardDescription>
                    </div>
                    <Badge>2021 - 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Provided 1st and 2nd line technical support to global clients, troubleshooting issues related to
                      Windows desktop and server environments.
                    </li>
                    <li>
                      Administered Office 365 environments, including user management, email configurations, and
                      security settings.
                    </li>
                    <li>
                      Supported and maintained telephony systems, assisting clients with configuration, troubleshooting,
                      and upgrades.
                    </li>
                    <li>
                      Deployed and managed Azure cloud services, including virtual machines, storage, networking, and
                      security solutions.
                    </li>
                    <li>
                      Diagnosed and resolved complex technical issues, collaborating with teams to escalate and resolve
                      issues promptly.
                    </li>
                    <li>Maintained a 5-star rating across Fiverr projects.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>AI Data Analyst Intern</CardTitle>
                      <CardDescription>Smallcap.ai, United Kingdom</CardDescription>
                    </div>
                    <Badge>08/2024 - 10/2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Designed scalable AI architectures, enhancing processing speed by 20% and facilitating faster data
                      analysis and model training.
                    </li>
                    <li>
                      Leveraged advanced data analytics techniques to support AI initiatives, resulting in a 25%
                      increase in decision-making efficiency.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to improve AI-driven solutions, achieving a 15% increase
                      in project success rates.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Data Analyst</CardTitle>
                      <CardDescription>Hi-Tech Brains, Peshawar, Pakistan</CardDescription>
                    </div>
                    <Badge>01/2023 - 06/2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Conducted data analyses using Python, achieving a 20% improvement in accuracy through robust data
                      cleaning and preprocessing.
                    </li>
                    <li>
                      Designed Tableau dashboards, reducing report generation time by 30%, and enabled real-time
                      visualization of key metrics.
                    </li>
                    <li>
                      Developed and fine-tuned predictive models, increasing forecast accuracy by 15% by optimizing key
                      variables and model parameters.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Software Tester & GitHub Administrator</CardTitle>
                      <CardDescription>Amazon, Remote</CardDescription>
                    </div>
                    <Badge>02/2023 - 07/2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Diagnosed and resolved complex issues in Java codebases, achieving a 90% resolution rate and
                      improving system performance.
                    </li>
                    <li>
                      Managed version control using GitHub, improving team performance by 10% through optimized
                      branching and merging practices.
                    </li>
                    <li>Developed and implemented CI/CD pipelines, reducing deployment time by 20%.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="py-16 container">
          <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>

          <Tabs defaultValue="education" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="education" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>Master of Data Analytics</CardTitle>
                      <Badge>2023 - 2024</Badge>
                    </div>
                    <CardDescription>University of Huddersfield, UK</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>BS in Software Engineering</CardTitle>
                      <Badge>2017 - 2021</Badge>
                    </div>
                    <CardDescription>Iqra University, Islamabad, Pakistan</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="certifications" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Python for Data Science and Machine Learning</CardTitle>
                    <CardDescription>Udemy</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Advanced SQL for Data Analysis</CardTitle>
                    <CardDescription>DataCamp</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:hamzasaeed0010@gmail.com" className="hover:text-primary">
                      hamzasaeed0010@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="tel:+447362743514" className="hover:text-primary">
                      +44 07362743514
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://linkedin.com/in/hamza-saeed-aba2a2237"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary flex items-center"
                    >
                      LinkedIn Profile
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <span className="hover:text-primary">GitHub Profile</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <p>Manchester, United Kingdom</p>
                  <p className="mt-2 text-sm text-muted-foreground">Eligible to work in the UK</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input id="name" type="text" className="w-full p-2 border rounded-md" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md"
                        placeholder="Your Message"
                      />
                    </div>
                  </div>
                  <Button className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Hamza Saeed. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/hamza-saeed-aba2a2237"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
