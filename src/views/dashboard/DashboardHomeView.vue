<template>
  <section id="user-section">
    <div class="admin-header container">
      <h1 class="text-white">Administración</h1>
      <hr>
      <section class="estadisticas pt-2">
        <div class="charts-container mb-4">
          <div class="row">
            <div class="col-md-4">
              <div class="pb-4 pb-md-0">
                <HighCharts :options="pieChartOptions"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pb-4 pb-md-0">
                <HighCharts :options="barChartOptions"/>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pb-4 pb-md-0">
                <HighCharts :options="lineChartOptions"/>
              </div>
            </div>
          </div>
        </div>
        <h4>Usuarios</h4>
        <div class="table-container">
          <ByrnTable id="users-table"/>
        </div>
      </section>
    </div>
    <div class="router-container container pt-5">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss">
#user-section {
  background:linear-gradient(180deg,rgb(40,153,118),#e9f8df);
  background-color: rgb(233,248,223);
  background-repeat: no-repeat;
  background-size: 100% 550px;
  background-position: top right;
  padding-bottom: 1em;
  .admin-header {
    padding-top: 6rem;
    padding-bottom: 1.5rem;
  }
  .router-container {
    background: rgb(233,248,223);
  }

  .table-container {
    overflow-x: auto;
    #users-table {
      min-width: 512px;
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'
import { actions as usersActions } from '@/store-modules/users/types'
import ByrnTable from '@/components/shared-components/TableComponent'
import { Chart } from 'highcharts-vue'

const pieChartOptions = {
  chart: {
    type: 'pie',
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, 'rgba(0,0,0,0)'],
        [1, 'rgba(0,0,0,0)']
      ]
    },
    plotBorderColor: '#606063'
  },
  title: {
    text: '<h1 style="font-size:25px; color: white">Propiedades</h1>'

  },
  /*
  subtitle: {
    text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  */
  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%'
      }
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },
  series: [{
    name: 'Propiedades',
    colorByPoint: true,
    data: [{
      name: 'Terrenos',
      y: 62.74,
      drilldown: 'Terrenos'
    },
    {
      name: 'Casas',
      y: 10.57,
      drilldown: 'Casas'
    },
    {
      name: 'Departamentos',
      y: 7.23,
      drilldown: 'Departamentos'
    },
    {
      name: 'Bodegas',
      y: 5.58,
      drilldown: 'Bodegas'
    },
    {
      name: 'Locales',
      y: 4.02,
      drilldown: 'Locales'
    },
    {
      name: 'Otros',
      y: 9.54,
      drilldown: null
    }
    ]
  }],
  drilldown: {
    series: [{
      name: 'Terrenos',
      id: 'Terrenos',
      data: [
        [
          'v65.0',
          0.1
        ],
        [
          'v64.0',
          1.3
        ],
        [
          'v63.0',
          53.02
        ],
        [
          'v62.0',
          1.4
        ],
        [
          'v61.0',
          0.88
        ],
        [
          'v60.0',
          0.56
        ],
        [
          'v59.0',
          0.45
        ],
        [
          'v58.0',
          0.49
        ],
        [
          'v57.0',
          0.32
        ],
        [
          'v56.0',
          0.29
        ],
        [
          'v55.0',
          0.79
        ],
        [
          'v54.0',
          0.18
        ],
        [
          'v51.0',
          0.13
        ],
        [
          'v49.0',
          2.16
        ],
        [
          'v48.0',
          0.13
        ],
        [
          'v47.0',
          0.11
        ],
        [
          'v43.0',
          0.17
        ],
        [
          'v29.0',
          0.26
        ]
      ]
    },
    {
      name: 'Casas',
      id: 'Casas',
      data: [
        [
          'v58.0',
          1.02
        ],
        [
          'v57.0',
          7.36
        ],
        [
          'v56.0',
          0.35
        ],
        [
          'v55.0',
          0.11
        ],
        [
          'v54.0',
          0.1
        ],
        [
          'v52.0',
          0.95
        ],
        [
          'v51.0',
          0.15
        ],
        [
          'v50.0',
          0.1
        ],
        [
          'v48.0',
          0.31
        ],
        [
          'v47.0',
          0.12
        ]
      ]
    },
    {
      name: 'Departamentos',
      id: 'Departamentos',
      data: [
        [
          'v11.0',
          6.2
        ],
        [
          'v10.0',
          0.29
        ],
        [
          'v9.0',
          0.27
        ],
        [
          'v8.0',
          0.47
        ]
      ]
    },
    {
      name: 'Bodegas',
      id: 'Bodegas',
      data: [
        [
          'v11.0',
          3.39
        ],
        [
          'v10.1',
          0.96
        ],
        [
          'v10.0',
          0.36
        ],
        [
          'v9.1',
          0.54
        ],
        [
          'v9.0',
          0.13
        ],
        [
          'v5.1',
          0.2
        ]
      ]
    },
    {
      name: 'Locales',
      id: 'Locales',
      data: [
        [
          'v16',
          2.6
        ],
        [
          'v15',
          0.92
        ],
        [
          'v14',
          0.4
        ],
        [
          'v13',
          0.1
        ]
      ]
    }
    ]
  }
}

const barChartOptions = {
  chart: {
    type: 'column',
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, 'rgba(0,0,0,0)'],
        [1, 'rgba(0,0,0,0)']
      ]
    }
  },
  title: {
    text: '<style="font-size:25px; color: white">Propiedades vendidas y rentadas este mes'
  },
  xAxis: {
    categories: ['Casas', 'Departamentos', 'Bodegas', 'Locales', 'Terrenos']
  },
  yAxis: {
    allowDecimals: false,
    min: 0,
    title: {
      text: 'Propiedades'
    }
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        'Total: ' + this.point.stackTotal
    }
  },
  plotOptions: {
    column: {
      stacking: 'normal'
    }
  },
  series: [{
    name: 'Jacob',
    data: [5, 3, 4, 7, 2],
    stack: 'male'
  }, {
    name: 'Alan',
    data: [3, 4, 4, 2, 5],
    stack: 'male'
  }, {
    name: 'Ilich',
    data: [2, 5, 6, 2, 1],
    stack: 'female'
  }, {
    name: 'Samir',
    data: [3, 0, 4, 4, 3],
    stack: 'female'
  }]
}

const lineChartOptions = {
  chart: {
    backgroundColor: {
      linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
      stops: [
        [0, 'rgba(0,0,0,0)'],
        [1, 'rgba(0,0,0,0)']
      ]
    }
  },
  title: {
    text: '<h1 style="font-size:25px; color: white">Usuarios registrados este mes </h1><br>'
  },
  yAxis: {
    title: {
      text: 'Empleados'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [{
    name: 'Sin categoria',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Vendedores',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Compradores',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Agentes',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Otros',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }
}

export default {
  name: 'dashboard-home',
  data () {
    return {
      pieChartOptions,
      barChartOptions,
      lineChartOptions
    }
  },
  mounted () {
    this.fetchUsers()
      .then(() => console.log('FETECH USERS?'))
  },
  methods: {
    ...mapActions({
      fetchUsers: usersActions.fetchAllUsers
    })
  },
  components: {
    HighCharts: Chart,
    ByrnTable
  }
}
</script>
