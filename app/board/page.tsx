import posts from '@/data/posts.json'
import Link from 'next/link'
import type { Metadata } from 'next'
import { PawPrint } from 'lucide-react'

export const metadata: Metadata = {
  title: '펫케어 팁 및 정보 게시판 | 반려동물 병원비',
  description: '강아지 고양이 건강 관리, 수술 비용, 질병 초기 증상 등 반려동물 보호자를 위한 필수 정보.',
  alternates: { canonical: '/board' },
}

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}

interface Props {
  searchParams: Promise<{ id?: string }>
}

export default async function BoardPage({ searchParams }: Props) {
  const { id } = await searchParams
  const allPosts: Post[] = posts as Post[]

  if (id) {
    const post = allPosts.find((p) => p.id === Number(id))

    if (!post) {
      return (
        <main className="mx-auto max-w-4xl px-4 py-16 text-center">
          <p className="text-muted-foreground mb-4">게시글을 찾을 수 없습니다.</p>
          <Link href="/board" className="text-primary font-medium hover:underline">← 목록으로</Link>
        </main>
      )
    }

    return (
      <main className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Link href="/board" className="mb-8 inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
          ← 목록으로 돌아가기
        </Link>

        <article className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
          <div className="mb-4">
            <span className="inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
          </div>
          <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl leading-snug">
            {post.title}
          </h1>
          <div className="mb-8 flex flex-wrap gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
            <span>📅 {post.date}</span>
            <span>🏷️ {post.tags.join(', ')}</span>
          </div>

          <div className="prose prose-gray max-w-none text-base leading-loose text-foreground">
            {post.content.split('\n').map((line, i) => (
              line.trim() === ''
                ? <br key={i} />
                : <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </article>

        <section className="mt-16">
          <h2 className="mb-6 text-lg font-bold text-foreground">이런 글은 어떠세요?</h2>
          <div className="flex flex-col gap-3">
            {allPosts.filter(p => p.id !== post.id).map(p => (
              <Link key={p.id} href={`/board?id=${p.id}`} className="block rounded-xl border border-border bg-card p-5 transition-colors hover:bg-muted/50">
                <span className="mb-1 inline-block text-xs font-semibold text-primary">{p.category}</span>
                <p className="text-base font-semibold text-foreground">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-16">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <PawPrint className="h-7 w-7 text-primary" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
            펫케어 관련 팁 & 정보
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed text-pretty">
            우리 아이들의 건강 관리부터 평균 치료 비용, 대비책까지 필수 정보들을 전달해 드립니다.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-6">
          {allPosts.map((post) => (
            <Link key={post.id} href={`/board?id=${post.id}`} className="group flex flex-col justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-md sm:flex-row sm:items-start">
              <div className="flex-1">
                <div className="mb-3 flex items-center justify-between sm:justify-start sm:gap-4">
                  <span className="inline-flex rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
