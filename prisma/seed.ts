import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { artistsData } from './songsData'

const prisma = new PrismaClient()

const run = async () => {
  await Promise.all(
    artistsData.map(async (artist) => {
      return prisma.artist.upsert({
        where: { name: artist.name },
        update: {},
        create: {
          name: artist.name,
          songs: {
            create: artist.songs.map((song) => ({
              name: song.name,
              duration: song.duration,
              url: song.url,
            })),
          },
        },
      })
    })
  )

  const salt = bcrypt.genSaltSync()
  const user = prisma.user.upsert({
    where: {email: 'test@test.com'},
    update: {},
    create: {
      email: 'test@test.com',
      password: bcrypt.hashSync('password', salt)
    }
  })
}

run()
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
