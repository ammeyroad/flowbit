<template>
  <div class="p-0">
    <p>memo</p>

    <hr />
    <div
      class="flex items-center justify-between p-4 bg-white dark:bg-gray-800"
    >
      <div>
        <button
          id="dropdownActionButton"
          data-dropdown-toggle="dropdownAction"
          class="
            inline-flex
            items-center
            text-gray-500
            bg-white
            border border-gray-300
            focus:outline-none
            hover:bg-gray-100
            focus:ring-4 focus:ring-gray-200
            font-medium
            rounded-lg
            text-sm
            px-3
            py-1.5
          "
          type="button"
        >
          <span class="sr-only">Action button</span>
          status
          <svg
            class="w-3 h-3 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdownAction"
          class="
            z-10
            hidden
            bg-white
            divide-y divide-gray-100
            rounded-lg
            shadow
            w-44
          "
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownActionButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 text-yellow-400"
                >Proses</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
                >Selesai</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  block
                  px-4
                  py-2
                  hover:bg-gray-100
                  dark:hover:bg-gray-600 dark:hover:text-white
                "
                >Tolak</a
              >
            </li>
          </ul>
        </div>
      </div>
      <label for="table-search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="
            w-1/2
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
          "
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          class="
            block
            p-2
            pl-10
            text-sm text-gray-900
            border border-gray-300
            rounded-lg
            w-50
            bg-gray-50
            focus:ring-blue-500 focus:border-blue-500
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="cari judul"
        />
      </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        class="
          w-full
          text-sm text-left text-gray-500
          dark:text-gray-400
          min-w-[800px]
        "
      >
        <thead
          class="
            text-xs text-gray-700
            uppercase
            bg-gray-50
            dark:bg-gray-700 dark:text-gray-400
          "
        >
          <tr>
            <th scope="col" class="px-6 py-3">Judul Memo</th>
            <th scope="col" class="py-3">Approval</th>
            <th scope="col" class="py-3 text-center">Tanggal in/out</th>
            <th scope="col" class="px-6 py-3">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in results"
            class="
              bg-white
              border-b
              dark:bg-gray-800 dark:border-gray-700
              hover:bg-gray-50
              dark:hover:bg-gray-600
            "
          >
            <td
              scope="row"
              class="
                flex
                items-center
                px-6
                py-2
                text-gray-900
                whitespace-nowrap
                dark:text-white
              "
            >
              <div>
                <div v-if="item.fields.status === 'proses'">
                  <div class="h-5 w-5 rounded-full bg-yellow-400 mr-2"></div>
                </div>
                <div v-else-if="item.fields.status === 'selesai'">
                  <div class="h-5 w-5 rounded-full bg-green-500 mr-2"></div>
                </div>
                <div v-else-if="item.fields.status === 'tolak'">
                  <div class="h-5 w-5 rounded-full bg-red-500 mr-2"></div>
                </div>
              </div>

              <div class="pl-3">
                <div class="text-base font-semibold">
                  {{ item.fields.judul }}
                </div>
                <div class="font-normal text-gray-500">
                  {{ item.fields.dept }}
                </div>
              </div>
            </td>
            <td class="">
              <div class="flex align-middle">
                <span
                  v-for="value in item.fields.direksi"
                  class="
                    bg-blue-100
                    text-blue-800 text-xs
                    font-medium
                    mr-1
                    px-2.5
                    py-0.5
                    rounded
                    dark:bg-blue-900 dark:text-blue-300
                  "
                >
                  {{ value }}</span
                >
              </div>
            </td>
            <td>
              <div class="flex align-middle px-2">
                <div class="w-1/2">
                  {{ item.fields.nmasuk }} <br />
                  <sup
                    ><b>{{ item.fields.tmasuk }}</b></sup
                  >
                </div>
                <div class="w-1/2">
                  {{ item.fields.nkeluar }} <br /><sup
                    ><b>{{ item.fields.tkeluar }}</b></sup
                  >
                </div>
              </div>
            </td>
            <td class="pr-4">
              <!-- Modal toggle -->
              <div>
                <a
                  href="#"
                  type="button"
                  class="
                    mr-2
                    font-medium
                    text-blue-600
                    dark:text-blue-500
                    hover:underline
                  "
                  >ambil</a
                >
                <a
                  href="#"
                  type="button"
                  class="
                    font-medium
                    text-blue-600
                    dark:text-blue-500
                    hover:underline
                  "
                  >lihat</a
                >
              </div>
              <p class="">{{ item.fields.ket }}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const url =
  'https://api.airtable.com/v0/appTjJ62VlXlQygqr/tblVPlqco0kra9Gap?api_key=keyR8rYGOyxgPY76u';

export default {
  data() {
    return {
      search: '',
      results: [],
    };
  },
  mounted() {
    axios.get(url).then((response) => {
      this.results = response.data.records;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
