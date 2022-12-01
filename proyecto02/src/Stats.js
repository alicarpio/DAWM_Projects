import { Chart } from 'chart.js/auto'
import MakeupApiService from './infraestructure/MakeupApiService'

const apiService = new MakeupApiService()

const brandsRanking = document.getElementById('stats-brands').getContext('2d')
const productsByRank = await apiService.getTopFiveNyxProducts()
const productNames = productsByRank.map(([name, _]) => name)
const productRanks = productsByRank.map(([_, rank]) => rank)

new Chart(brandsRanking, {
  type: 'bar',
  data: {
    labels: productNames,
    datasets: [
      {
        label: 'Top Productos de Nyx',
        data: productRanks,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 205, 86, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
})

const statsRanking = document.getElementById('stats-ranking').getContext('2d')
const productsByTag = await apiService.getProductsByTag()
const productTags = productsByTag.map(([tag, _]) => tag)
const productTagNumbers = productsByTag.map(([_, n]) => n)

new Chart(statsRanking, {
  type: 'polarArea',
  data: {
    labels: productTags,
    datasets: [
      {
        label: 'Top Productos de Nyx',
        data: productTagNumbers,
        backgroundColor: [
          'rgba(27, 150, 198, 0.6)',
          'rgba(239, 118, 122, 0.6)',
          'rgba(69, 105, 144, 0.6)',
          'rgba(111,212,211, 0.6)',
          'rgba(238,184,104, 0.6)',
        ],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
  },
})
