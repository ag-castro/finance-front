<template>
  <div>
    <TotalBalance class="mb-2" />
    <ToolBarByMonth
      class="mb-2"
      format="MM-YYYY"
      @month="changeMonth"
      :color="toolbarColor"
      :month="$route.query.month"
    />
    <v-card>
      <v-card-text class="text-center" v-if="mappedRecordsLength === 0">
        <v-icon size="100" color="grey">assignment</v-icon>
        <p class="font-weight-light subheading grey--text">Nenhum Lançamento no periodo!</p>
      </v-card-text>
      <v-list v-else two-line subheader>
        <template v-for="(records, date, index) in mappedRecords">
          <v-subheader :key="date">{{date}}</v-subheader>
          <RecordsListItem v-for="record in records" :key="record.id" :record="record" />
          <v-divider v-if="showDivider(index, mappedRecords)" :key="`${date}-${index}`"></v-divider>
        </template>
      </v-list>
      <v-footer class="pa-1">
        <v-flex text-right>
          <h3 class="font-weight-light">
            <span>Saldo do Mês:</span>
            <strong class="ml-5" :class="amountColor(totalAmount)">{{ formatCurrency(totalAmount) }}</strong>
          </h3>
        </v-flex>
      </v-footer>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment';
import { groupBy } from '@/utils';
import RecordsListItem from './RecordsListItem.vue';
import RecordsService from './../services/record-service';
import amountColorMixin from './../mixins/amount-color';
import formatCurrencyMixin from '@/mixins/format-currency';
import ToolBarByMonth from './ToolBarByMonth.vue';
import TotalBalance from './TotalBalance.vue';

export default {
  name: 'RecordsList',
  components: {
    RecordsListItem,
    ToolBarByMonth,
    TotalBalance
  },
  mixins: [amountColorMixin, formatCurrencyMixin],
  data: () => ({
    records: []
  }),
  computed: {
    mappedRecordsLength () {
      return Object.keys(this.mappedRecords).length
    },
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey]).format('DD/MM/YYYY')
      })
    },
    totalAmount () {
      return this.records.reduce((sum, record) => sum + record.amount, 0)
    },
    toolbarColor () {
      return this.totalAmount < 0 ? 'error' : 'primary';
    }
  },
  methods: {
    changeMonth (month) {
      this.$router.push({
        path: this.$route.path,
        query: { month }
      })
      this.setRecords(month)
    },
    async setRecords (month) {
      this.records = await RecordsService.records({ month })
    },
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    }
  }
}
</script>
