<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      striped
      hover
      aria-controls="my-table"
      align="center"
    ></b-pagination>
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :small="true"
      :striped="true"
      :hover="true"
      :responsive="true"
      :foot-clone="true"
    >
      <template v-slot:cell(Document)="data">
        <b-button variant="danger">{{ data.item.id }}</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        { key: "first_name", label: "First Name", sortable: true },
        { key: "last_name", label: "Last", sortable: true },
        "Document",
      ],
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<style></style>
