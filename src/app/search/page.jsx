import { Container } from '@/components/Container'
import { ArchitectCard } from '@/components/ArchitectCard'
import { apiService } from '@/services/apiService'

// Template inicial da página de busca (Next.js App Router)
// - Lê `keywords` e `page` da query string
// - Sincroniza input <-> URL (debounce)
// - Faz fetch para /api/search quando houver keywords

export default async function SearchPage() {

    const { data: architects } = await apiService.architect.getAll();
    console.log('architects', architects);
    return (
        <Container>
            {architects.length === 0 ? (
                <p>Nenhum resultado</p>
            ) : (
                <ArchitectCard architects={architects} />
            )}
        </Container>
    )
}
