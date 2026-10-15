import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-blue-950">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Vidit's homepage</h1>
        <Image
          src="/Grad photo.png"
          alt="Graduation photo"
          width={500}
          height={300}
        ></Image>
        <p>Motivated Computer Science sophomore at the University of Texas at Dallas with hands-on experience in Python, Java, Swift, and C++ through collaborative academic and project-based development. Passionate about software engineering, open-source technologies, and Artificial intelligence. Seeking a Software Engineering internship to apply strong problem-solving and teamwork skills to contribute to real-world products while learning from experienced mentors.</p>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #3b82f6', paddingBottom: '5px' }}>Education</h2>
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ fontWeight: 'bold', margin: '0' }}>B.S. in Computer Science</h3>
            <p style={{ margin: '2px 0', color: '#666' }}>University of Texas at Dallas | 2025 - 2029</p>
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', borderBottom: '2px solid #3b82f6', paddingBottom: '5px' }}>Socials</h2>
          <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
            <a href="www.linkedin.com/in/viditsharma-software" target="_blank" rel="noreferrer" style={{ color: '#0077b5', fontWeight: 'bold' }}>LinkedIn</a>
          </div>
        </section>
      </main>
    </div>
  );
}
