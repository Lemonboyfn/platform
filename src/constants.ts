import { PublicKey } from '@solana/web3.js'
import { FAKE_TOKEN_MINT, PoolToken, TokenMeta, makeHeliusTokenFetcher } from 'gamba-react-ui-v2'

export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? 'https://api.mainnet-beta.solana.com'

export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  'DwdS5fWHA9v5ho4GSiUasQkMLcwjWdBbd52bi7BYuGuV',
)

export const EXPLORER_URL = 'https://icecasino.vercel.app/'
export const PLATFORM_SHARABLE_URL = 'ice.casino'

export const PLATFORM_CREATOR_FEE = 5
export const PLATFORM_JACKPOT_FEE = 0.001
export const PLATFORM_REFERRAL_FEE = 0.0025
export const PLATFORM_ALLOW_REFERRER_REMOVAL = true

const lp = (tokenMint: PublicKey | string, poolAuthority?: PublicKey | string): PoolToken => ({
  token: new PublicKey(tokenMint),
  authority: poolAuthority !== undefined ? new PublicKey(poolAuthority) : undefined,
})

export const POOLS = [
  // SOL only:
  lp('So11111111111111111111111111111111111111112'),
]

export const DEFAULT_POOL = POOLS[0]

export const TOKEN_METADATA: (Partial<TokenMeta> & { mint: PublicKey })[] = [
  {
    mint: new PublicKey('So11111111111111111111111111111111111111112'),
    name: 'Solana',
    symbol: 'SOL',
    image: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=032',
    baseWager: 1e9,
    decimals: 9,
    usdPrice: 0, // Optional: You can dynamically fetch real-time price if needed
  },
]

export const TOS_HTML = `
  <p><b>1. Age Requirement:</b> Must be at least 18 years old.</p>
  <p><b>2. Legal Compliance:</b> Follow local laws responsibly.</p>
  <p><b>3. Risk Acknowledgement:</b> Games involve risk; no guaranteed winnings.</p>
  <p><b>4. No Warranty:</b> Games provided "as is"; operate randomly.</p>
  <p><b>5. Limitation of Liability:</b> We're not liable for damages.</p>
  <p><b>6. Licensing Disclaimer:</b> Not a licensed casino; for simulation only.</p>
  <p><b>7. Fair Play:</b> Games are conducted fairly and transparently.</p>
  <p><b>8. Data Privacy:</b> Your privacy is important to us.</p>
  <p><b>9. Responsible Gaming:</b> Play responsibly; seek help if needed.</p>
`

export const TOKEN_METADATA_FETCHER = (
  () => {
    if (import.meta.env.VITE_HELIUS_API_KEY) {
      return makeHeliusTokenFetcher(
        import.meta.env.VITE_HELIUS_API_KEY,
        { dollarBaseWager: 1 },
      )
    }
  }
)()

export const ENABLE_LEADERBOARD = true 
export const ENABLE_TROLLBOX = true
