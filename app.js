const STORAGE_KEY = 'printbiz-manager-demo-v1';

const currencyFormatter = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
});

const defaultState = {
  customers: [
    {
      id: 'CUST-1001',
      name: 'Ada Okafor',
      businessName: 'Eagle Prints',
      phone: '0803 555 0191',
      email: 'ada@eagleprints.ng',
      notes: 'Repeat apparel client',
    },
    {
      id: 'CUST-1002',
      name: 'Musa Bello',
      businessName: 'Bello Foods',
      phone: '0706 210 4455',
      email: 'ops@bellofoods.ng',
      notes: 'Prefers branded takeaway packs',
    },
    {
      id: 'CUST-1003',
      name: 'Beatrice Eze',
      businessName: 'Glow Studio',
      phone: '0812 440 8821',
      email: 'hello@glowstudio.ng',
      notes: 'Event signage and banners',
    },
    {
      id: 'CUST-1004',
      name: 'Chinwe Umeh',
      businessName: 'Urban Nest',
      phone: '0902 773 1180',
      email: 'projects@urbannest.ng',
      notes: 'Corporate branding and labels',
    },
    {
      id: 'CUST-1005',
      name: 'Tunde Adebayo',
      businessName: 'Prime Eventz',
      phone: '0805 110 2244',
      email: 'events@primeeventz.net',
      notes: 'Large event graphics and backdrops',
    },
  ],
  orders: [
    {
      id: 'ORD-2001',
      customerId: 'CUST-1001',
      product: 'Corporate T-shirt branding',
      quantity: 180,
      orderDate: '2026-10-04',
      deadline: '2026-10-09',
      sellingPrice: 540000,
      amountPaid: 330000,
      status: 'In Production',
      notes: 'Front and back print with chest logo',
    },
    {
      id: 'ORD-2002',
      customerId: 'CUST-1002',
      product: 'Takeaway menu sleeves',
      quantity: 320,
      orderDate: '2026-09-18',
      deadline: '2026-09-28',
      sellingPrice: 420000,
      amountPaid: 420000,
      status: 'Delivered',
      notes: 'Includes laminated sleeves',
    },
    {
      id: 'ORD-2003',
      customerId: 'CUST-1003',
      product: 'Event banners package',
      quantity: 12,
      orderDate: '2026-10-05',
      deadline: '2026-10-12',
      sellingPrice: 255000,
      amountPaid: 100000,
      status: 'Confirmed',
      notes: 'Interior and exterior banner set',
    },
    {
      id: 'ORD-2004',
      customerId: 'CUST-1004',
      product: 'Office signage set',
      quantity: 8,
      orderDate: '2026-10-01',
      deadline: '2026-10-08',
      sellingPrice: 310000,
      amountPaid: 150000,
      status: 'Awaiting Payment',
      notes: 'Reception sign and wall vinyl',
    },
    {
      id: 'ORD-2005',
      customerId: 'CUST-1005',
      product: 'Conference backdrop & table covers',
      quantity: 27,
      orderDate: '2026-10-12',
      deadline: '2026-10-18',
      sellingPrice: 680000,
      amountPaid: 500000,
      status: 'Ready for Collection',
      notes: 'Full stage branding package',
    },
    {
      id: 'ORD-2006',
      customerId: 'CUST-1003',
      product: 'Business card and stationery set',
      quantity: 500,
      orderDate: '2026-09-28',
      deadline: '2026-10-05',
      sellingPrice: 180000,
      amountPaid: 180000,
      status: 'Delivered',
      notes: 'Double-sided premium card stock',
    },
  ],
  inventory: [
    {
      id: 'INV-3001',
      name: 'Premium Flex Vinyl',
      category: 'Vinyl',
      stock: 48,
      minStock: 25,
      unit: 'rolls',
    },
    {
      id: 'INV-3002',
      name: 'A3 Printing Paper',
      category: 'Paper',
      stock: 12,
      minStock: 20,
      unit: 'reams',
    },
    {
      id: 'INV-3003',
      name: 'Eco Solvent Ink',
      category: 'Ink',
      stock: 6,
      minStock: 10,
      unit: 'bottles',
    },
    {
      id: 'INV-3004',
      name: 'Packaging Tape',
      category: 'Packaging',
      stock: 36,
      minStock: 15,
      unit: 'rolls',
    },
    {
      id: 'INV-3005',
      name: 'Laminating Film',
      category: 'Finish',
      stock: 28,
      minStock: 18,
      unit: 'sheets',
    },
  ],
  payments: [
    { id: 'PAY-4001', orderId: 'ORD-2001', amount: 330000, date: '2026-10-05', notes: 'Deposit and partial payment' },
    { id: 'PAY-4002', orderId: 'ORD-2002', amount: 420000, date: '2026-09-19', notes: 'Complete collection' },
    { id: 'PAY-4003', orderId: 'ORD-2003', amount: 100000, date: '2026-10-06', notes: 'Down payment' },
    { id: 'PAY-4004', orderId: 'ORD-2004', amount: 150000, date: '2026-10-02', notes: 'Advance payment' },
    { id: 'PAY-4005', orderId: 'ORD-2005', amount: 500000, date: '2026-10-13', notes: 'Stage branding deposit' },
    { id: 'PAY-4006', orderId: 'ORD-2006', amount: 180000, date: '2026-09-29', notes: 'Final payment' },
  ],
  expenses: [
    { id: 'EXP-5001', date: '2026-10-03', category: 'Materials', amount: 87000, notes: 'Vinyl and ink restock' },
    { id: 'EXP-5002', date: '2026-10-04', category: 'Transport', amount: 23000, notes: 'Delivery fuel and dispatch' },
    { id: 'EXP-5003', date: '2026-10-07', category: 'Utilities', amount: 19000, notes: 'Generator and electricity' },
    { id: 'EXP-5004', date: '2026-10-10', category: 'Marketing', amount: 35000, notes: 'Business cards and social ads' },
  ],
  adjustments: [],
};

let state = loadState();
let salesChart;
let statusChart;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.customers) && Array.isArray(parsed.orders)) {
        return parsed;
      }
    } catch (error) {
      console.warn('Unable to parse saved state:', error);
    }
  }

  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function formatCurrency(value) {
  return currencyFormatter.format(Number(value || 0));
}

function formatDate(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('en-NG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCustomerName(customerId) {
  const customer = state.customers.find((item) => item.id === customerId);
  return customer ? customer.name : 'Unknown customer';
}

function getOrderStatusClass(status) {
  const normalized = String(status || '').toLowerCase().replace(/\s+/g, '-');
  return `status-${normalized}`;
}

function getOrderAmountPaid(order) {
  const explicitAmount = Number(order.amountPaid || 0);
  const paymentTotal = state.payments
    .filter((payment) => payment.orderId === order.id)
    .reduce((total, payment) => total + Number(payment.amount || 0), 0);
  return Math.max(explicitAmount, paymentTotal);
}

function getOrderOutstanding(order) {
  const orderValue = Number(order.sellingPrice || 0);
  const totalPaid = getOrderAmountPaid(order);
  return Math.max(orderValue - totalPaid, 0);
}

function getOrderTotalPaid(orderId) {
  const order = state.orders.find((item) => item.id === orderId);
  if (!order) return 0;
  return getOrderAmountPaid(order);
}

function getMonthLabel(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  return new Intl.DateTimeFormat('en-NG', { month: 'short', year: 'numeric' }).format(date);
}

function buildSummaryCard(label, value, icon, tone = 'primary') {
  return `
    <article class="summary-card">
      <div class="label">
        <span>${escapeHtml(label)}</span>
        <span class="icon-badge ${tone}">${escapeHtml(icon)}</span>
      </div>
      <p class="value">${escapeHtml(value)}</p>
    </article>
  `;
}

function renderDashboardSummary() {
  const totalOrderValue = state.orders.reduce((sum, order) => sum + Number(order.sellingPrice || 0), 0);
  const totalCashReceived = state.payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  const totalExpenses = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
  const outstandingBalances = state.orders.reduce((sum, order) => sum + getOrderOutstanding(order), 0);
  const pendingOrders = state.orders.filter((order) => !['Delivered', 'Cancelled'].includes(order.status)).length;
  const lowStockCount = state.inventory.filter((item) => Number(item.stock) <= Number(item.minStock)).length;
  const inProduction = state.orders.filter((order) => order.status === 'In Production').length;
  const estimatedProfit = totalOrderValue - totalExpenses - outstandingBalances;

  const cards = [
    buildSummaryCard('Total order value', formatCurrency(totalOrderValue), '₦', 'primary'),
    buildSummaryCard('Cash received', formatCurrency(totalCashReceived), '₵', 'accent'),
    buildSummaryCard('Outstanding balances', formatCurrency(outstandingBalances), '◌', 'warning'),
    buildSummaryCard('Recorded expenses', formatCurrency(totalExpenses), '−', 'danger'),
    buildSummaryCard('Estimated profit', formatCurrency(estimatedProfit), '✓', 'primary'),
    buildSummaryCard('Pending orders', String(pendingOrders), '!', 'warning'),
    buildSummaryCard('Low-stock items', String(lowStockCount), '⚠', 'danger'),
    buildSummaryCard('In production', String(inProduction), '🖨', 'accent'),
  ];

  document.getElementById('dashboardSummaryCards').innerHTML = cards.join('');

  const orderPipeline = {
    'Awaiting Payment': state.orders.filter((order) => order.status === 'Awaiting Payment').length,
    'In Production': state.orders.filter((order) => order.status === 'In Production').length,
    'Ready for Collection': state.orders.filter((order) => order.status === 'Ready for Collection').length,
    Delivered: state.orders.filter((order) => order.status === 'Delivered').length,
  };

  const pipelineHtml = Object.entries(orderPipeline)
    .map(([label, count]) => `
      <div class="status-pipeline-item">
        <div class="status-pipeline-head">
          <span>${escapeHtml(label)}</span>
          <span class="status-badge ${getOrderStatusClass(label)}">${count}</span>
        </div>
        <div class="status-pipeline-value">${count}</div>
      </div>
    `)
    .join('');

  document.getElementById('statusPipeline').innerHTML = pipelineHtml;
}

function renderRecentOrders() {
  const rows = [...state.orders]
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .slice(0, 5)
    .map((order) => {
      const statusClass = getOrderStatusClass(order.status);
      return `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${escapeHtml(getCustomerName(order.customerId))}</td>
          <td><span class="status-badge ${statusClass}">${escapeHtml(order.status)}</span></td>
          <td>${formatCurrency(order.sellingPrice)}</td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('recentOrdersTable').innerHTML = rows || '<tr><td colspan="4" class="empty-state">No recent orders yet.</td></tr>';
}

function renderLowStockList() {
  const lowStockItems = state.inventory.filter((item) => Number(item.stock) <= Number(item.minStock));

  const html = lowStockItems.length
    ? lowStockItems.map((item) => `
        <li>
          <strong>${escapeHtml(item.name)}</strong>
          <span>${item.stock} / ${item.minStock} ${escapeHtml(item.unit)}</span>
        </li>
      `).join('')
    : '<li class="empty-state">No low-stock items</li>';

  document.getElementById('lowStockList').innerHTML = html;
}

function renderSalesChart() {
  const monthMap = new Map();
  const labels = [];
  const salesValues = [];
  const collectionsValues = [];

  for (let i = 5; i >= 0; i -= 1) {
    const date = new Date();
    date.setMonth(date.getMonth() - i, 1);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    labels.push(new Intl.DateTimeFormat('en-NG', { month: 'short' }).format(date));
    monthMap.set(key, { sales: 0, collections: 0 });
  }

  state.orders.forEach((order) => {
    const key = order.orderDate ? order.orderDate.slice(0, 7) : null;
    if (key && monthMap.has(key)) {
      monthMap.get(key).sales += Number(order.sellingPrice || 0);
    }
  });

  state.payments.forEach((payment) => {
    const key = payment.date ? payment.date.slice(0, 7) : null;
    if (key && monthMap.has(key)) {
      monthMap.get(key).collections += Number(payment.amount || 0);
    }
  });

  labels.forEach((label, index) => {
    const baseDate = new Date();
    baseDate.setMonth(baseDate.getMonth() - (labels.length - 1 - index), 1);
    const key = `${baseDate.getFullYear()}-${String(baseDate.getMonth() + 1).padStart(2, '0')}`;
    const values = monthMap.get(key) || { sales: 0, collections: 0 };
    salesValues.push(values.sales);
    collectionsValues.push(values.collections);
  });

  const salesCtx = document.getElementById('salesChart');
  if (salesChart) salesChart.destroy();

  salesChart = new Chart(salesCtx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Order value',
          data: salesValues,
          backgroundColor: '#193d8d',
          borderRadius: 8,
        },
        {
          label: 'Collections',
          data: collectionsValues,
          backgroundColor: '#1a9c74',
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: {
          ticks: {
            callback: (value) => `₦${Number(value).toLocaleString()}`,
          },
        },
      },
    },
  });
}

function renderStatusChart() {
  const counts = {
    Quotation: 0,
    'Awaiting Payment': 0,
    Confirmed: 0,
    'In Production': 0,
    'Ready for Collection': 0,
    Delivered: 0,
    Cancelled: 0,
  };

  state.orders.forEach((order) => {
    if (counts[order.status] !== undefined) counts[order.status] += 1;
  });

  const statusCtx = document.getElementById('statusChart');
  if (statusChart) statusChart.destroy();

  statusChart = new Chart(statusCtx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(counts),
      datasets: [{
        data: Object.values(counts),
        backgroundColor: ['#3b82f6', '#fbbf24', '#10b981', '#8b5cf6', '#e879f9', '#14b8a6', '#f87171'],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom' } },
    },
  });
}

function renderOrders() {
  const query = document.getElementById('orderSearch')?.value.trim().toLowerCase() || '';
  const statusFilter = document.getElementById('orderStatusFilter')?.value || 'all';

  const filteredOrders = state.orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(query) ||
      getCustomerName(order.customerId).toLowerCase().includes(query) ||
      order.product.toLowerCase().includes(query);
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const rows = filteredOrders
    .slice()
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .map((order) => {
      const statusClass = getOrderStatusClass(order.status);
      const paid = getOrderAmountPaid(order);
      const balance = getOrderOutstanding(order);
      return `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${escapeHtml(getCustomerName(order.customerId))}</td>
          <td>${escapeHtml(order.product)}</td>
          <td>${escapeHtml(order.quantity)}</td>
          <td>${escapeHtml(formatDate(order.deadline))}</td>
          <td>${formatCurrency(order.sellingPrice)}</td>
          <td>${formatCurrency(paid)}</td>
          <td>${formatCurrency(balance)}</td>
          <td><span class="status-badge ${statusClass}">${escapeHtml(order.status)}</span></td>
          <td>
            <div class="action-group">
              <button class="icon-btn edit-order" data-order-id="${order.id}" type="button">Edit</button>
              <button class="inline-btn danger delete-order" data-order-id="${order.id}" type="button">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('ordersTableBody').innerHTML = rows || '<tr><td colspan="10" class="empty-state">No matching orders</td></tr>';
}

function renderCustomers() {
  const query = document.getElementById('customerSearch')?.value.trim().toLowerCase() || '';
  const filteredCustomers = state.customers.filter((customer) => {
    return (
      customer.name.toLowerCase().includes(query) ||
      customer.businessName.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query)
    );
  });

  const rows = filteredCustomers
    .map((customer) => {
      const orderCount = state.orders.filter((order) => order.customerId === customer.id).length;
      return `
        <tr>
          <td>${escapeHtml(customer.name)}</td>
          <td>${escapeHtml(customer.businessName)}</td>
          <td>${escapeHtml(customer.phone)}</td>
          <td>${escapeHtml(customer.email)}</td>
          <td>${orderCount}</td>
          <td>
            <div class="action-group">
              <button class="icon-btn edit-customer" data-customer-id="${customer.id}" type="button">Edit</button>
              <button class="inline-btn danger delete-customer" data-customer-id="${customer.id}" type="button">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('customersTableBody').innerHTML = rows || '<tr><td colspan="6" class="empty-state">No matching customers</td></tr>';
}

function renderInventory() {
  const rows = state.inventory
    .map((item) => {
      const isLow = Number(item.stock) <= Number(item.minStock);
      const status = isLow ? 'Low stock' : 'Healthy';
      return `
        <tr>
          <td>${escapeHtml(item.name)}</td>
          <td>${escapeHtml(item.category)}</td>
          <td>${escapeHtml(item.stock)} ${escapeHtml(item.unit)}</td>
          <td>${escapeHtml(item.minStock)} ${escapeHtml(item.unit)}</td>
          <td>${escapeHtml(item.unit)}</td>
          <td><span class="status-badge ${isLow ? 'status-awaiting-payment' : 'status-confirmed'}">${status}</span></td>
          <td>
            <div class="action-group">
              <button class="icon-btn edit-material" data-material-id="${item.id}" type="button">Edit</button>
              <button class="inline-btn danger delete-material" data-material-id="${item.id}" type="button">Delete</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('inventoryTableBody').innerHTML = rows || '<tr><td colspan="7" class="empty-state">No inventory items yet.</td></tr>';

  const stockMaterialSelect = document.getElementById('stockMaterialId');
  if (stockMaterialSelect) {
    stockMaterialSelect.innerHTML = state.inventory
      .map((item) => `<option value="${item.id}">${escapeHtml(item.name)}</option>`)
      .join('');
  }
}

function renderPaymentOverview() {
  const rows = state.orders
    .slice()
    .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
    .map((order) => {
      const customerName = getCustomerName(order.customerId);
      const paid = getOrderAmountPaid(order);
      const balance = getOrderOutstanding(order);
      return `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${escapeHtml(customerName)}</td>
          <td>${formatCurrency(order.sellingPrice)}</td>
          <td>${formatCurrency(paid)}</td>
          <td>${formatCurrency(balance)}</td>
        </tr>
      `;
    })
    .join('');

  document.getElementById('paymentOverviewBody').innerHTML = rows || '<tr><td colspan="5" class="empty-state">No payment records.</td></tr>';
}

function renderReportSummary() {
  const totalSales = state.orders.reduce((sum, order) => sum + Number(order.sellingPrice || 0), 0);
  const totalCollections = state.payments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0);
  const outstandingBalances = state.orders.reduce((sum, order) => sum + getOrderOutstanding(order), 0);
  const totalExpenses = state.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);

  const cards = [
    buildSummaryCard('Sales', formatCurrency(totalSales), '₦', 'primary'),
    buildSummaryCard('Collections', formatCurrency(totalCollections), '₵', 'accent'),
    buildSummaryCard('Outstanding', formatCurrency(outstandingBalances), '◌', 'warning'),
    buildSummaryCard('Expenses', formatCurrency(totalExpenses), '−', 'danger'),
  ];

  document.getElementById('reportSummaryCards').innerHTML = cards.join('');

  document.getElementById('monthlyReportBody').innerHTML = buildMonthlySummary();
  document.getElementById('dailyReportBody').innerHTML = buildDailySummary();
}

function buildMonthlySummary() {
  const monthMap = new Map();

  for (let i = 5; i >= 0; i -= 1) {
    const date = new Date();
    date.setMonth(date.getMonth() - i, 1);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthMap.set(key, { sales: 0, collections: 0, expenses: 0, outstanding: 0 });
  }

  state.orders.forEach((order) => {
    const key = order.orderDate ? order.orderDate.slice(0, 7) : null;
    if (key && monthMap.has(key)) {
      monthMap.get(key).sales += Number(order.sellingPrice || 0);
      monthMap.get(key).outstanding += getOrderOutstanding(order);
    }
  });

  state.payments.forEach((payment) => {
    const key = payment.date ? payment.date.slice(0, 7) : null;
    if (key && monthMap.has(key)) monthMap.get(key).collections += Number(payment.amount || 0);
  });

  state.expenses.forEach((expense) => {
    const key = expense.date ? expense.date.slice(0, 7) : null;
    if (key && monthMap.has(key)) monthMap.get(key).expenses += Number(expense.amount || 0);
  });

  const rows = Array.from(monthMap.entries())
    .map(([key, value]) => {
      const estimatedProfit = value.collections - value.expenses;
      return `
        <tr>
          <td>${getMonthLabel(`${key}-01`)}</td>
          <td>${formatCurrency(value.sales)}</td>
          <td>${formatCurrency(value.collections)}</td>
          <td>${formatCurrency(value.outstanding)}</td>
          <td>${formatCurrency(value.expenses)}</td>
          <td>${formatCurrency(estimatedProfit)}</td>
        </tr>
      `;
    })
    .join('');

  return rows || '<tr><td colspan="6" class="empty-state">No monthly data.</td></tr>';
}

function buildDailySummary() {
  const labels = [];
  const amounts = new Map();

  for (let i = 6; i >= 0; i -= 1) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const iso = date.toISOString().slice(0, 10);
    labels.push(iso);
    amounts.set(iso, { sales: 0, collections: 0, expenses: 0, outstanding: 0 });
  }

  state.orders.forEach((order) => {
    if (amounts.has(order.orderDate)) {
      amounts.get(order.orderDate).sales += Number(order.sellingPrice || 0);
      amounts.get(order.orderDate).outstanding += getOrderOutstanding(order);
    }
  });

  state.payments.forEach((payment) => {
    if (amounts.has(payment.date)) amounts.get(payment.date).collections += Number(payment.amount || 0);
  });

  state.expenses.forEach((expense) => {
    if (amounts.has(expense.date)) amounts.get(expense.date).expenses += Number(expense.amount || 0);
  });

  const rows = labels
    .map((dateKey) => {
      const item = amounts.get(dateKey);
      return `
        <tr>
          <td>${formatDate(dateKey)}</td>
          <td>${formatCurrency(item.sales)}</td>
          <td>${formatCurrency(item.collections)}</td>
          <td>${formatCurrency(item.expenses)}</td>
          <td>${formatCurrency(item.outstanding)}</td>
        </tr>
      `;
    })
    .join('');

  return rows || '<tr><td colspan="5" class="empty-state">No daily data.</td></tr>';
}

function renderDataSummary() {
  const cards = [
    buildSummaryCard('Customers', String(state.customers.length), '👥', 'primary'),
    buildSummaryCard('Orders', String(state.orders.length), '📦', 'accent'),
    buildSummaryCard('Materials', String(state.inventory.length), '🧾', 'warning'),
    buildSummaryCard('Payments', String(state.payments.length), '💳', 'danger'),
  ];
  document.getElementById('dataSummaryCards').innerHTML = cards.join('');
}

function populateOrderSelects() {
  const paymentSelect = document.getElementById('paymentOrderId');
  if (paymentSelect) {
    paymentSelect.innerHTML = state.orders.length
      ? state.orders.map((order) => `<option value="${order.id}">${escapeHtml(order.id)} - ${escapeHtml(getCustomerName(order.customerId))}</option>`).join('')
      : '<option value="">No orders available</option>';
  }

  const customerSelect = document.getElementById('orderCustomerId');
  if (customerSelect) {
    customerSelect.innerHTML = state.customers.length
      ? state.customers.map((customer) => `<option value="${customer.id}">${escapeHtml(customer.name)} - ${escapeHtml(customer.businessName)}</option>`).join('')
      : '<option value="">No customers available</option>';
  }
}

function renderAll() {
  renderDashboardSummary();
  renderRecentOrders();
  renderLowStockList();
  renderSalesChart();
  renderStatusChart();
  renderOrders();
  renderCustomers();
  renderInventory();
  renderPaymentOverview();
  renderReportSummary();
  renderDataSummary();
  populateOrderSelects();
  syncPageTitle();
}

function syncPageTitle() {
  const pageTitle = document.getElementById('pageTitle');
  const activeView = document.querySelector('.nav-item.active')?.dataset.view || 'dashboard';
  const titles = {
    dashboard: 'Dashboard',
    orders: 'Order management',
    customers: 'Customer management',
    inventory: 'Inventory management',
    payments: 'Payments & expenses',
    reports: 'Reports & summaries',
    data: 'Data management',
  };
  pageTitle.textContent = titles[activeView] || 'Dashboard';
}

function bindNavigation() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.view').forEach((section) => section.classList.remove('active'));
      const target = document.getElementById(`${button.dataset.view}-view`);
      if (target) target.classList.add('active');
      syncPageTitle();
    });
  });
}

function bindGlobalSearch() {
  const searchInput = document.getElementById('globalSearch');
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();
    if (!term) {
      renderAll();
      return;
    }

    const matchingOrders = state.orders.filter((order) =>
      order.id.toLowerCase().includes(term) ||
      getCustomerName(order.customerId).toLowerCase().includes(term) ||
      order.product.toLowerCase().includes(term)
    );

    const matchingCustomers = state.customers.filter((customer) =>
      customer.name.toLowerCase().includes(term) ||
      customer.businessName.toLowerCase().includes(term) ||
      customer.email.toLowerCase().includes(term)
    );

    document.getElementById('ordersTableBody').innerHTML = matchingOrders.length
      ? matchingOrders.map((order) => `
        <tr>
          <td>${escapeHtml(order.id)}</td>
          <td>${escapeHtml(getCustomerName(order.customerId))}</td>
          <td>${escapeHtml(order.product)}</td>
          <td>${escapeHtml(order.quantity)}</td>
          <td>${escapeHtml(formatDate(order.deadline))}</td>
          <td>${formatCurrency(order.sellingPrice)}</td>
          <td>${formatCurrency(getOrderAmountPaid(order))}</td>
          <td>${formatCurrency(getOrderOutstanding(order))}</td>
          <td><span class="status-badge ${getOrderStatusClass(order.status)}">${escapeHtml(order.status)}</span></td>
          <td>—</td>
        </tr>
      `).join('')
      : '<tr><td colspan="10" class="empty-state">No matching order records.</td></tr>';

    document.getElementById('customersTableBody').innerHTML = matchingCustomers.length
      ? matchingCustomers.map((customer) => `
        <tr>
          <td>${escapeHtml(customer.name)}</td>
          <td>${escapeHtml(customer.businessName)}</td>
          <td>${escapeHtml(customer.phone)}</td>
          <td>${escapeHtml(customer.email)}</td>
          <td>${state.orders.filter((order) => order.customerId === customer.id).length}</td>
          <td>—</td>
        </tr>
      `).join('')
      : '<tr><td colspan="6" class="empty-state">No matching customer records.</td></tr>';
  });
}

function bindOrderForm() {
  const form = document.getElementById('orderForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const order = {
      id: document.getElementById('orderId').value || `ORD-${Date.now()}`,
      customerId: document.getElementById('orderCustomerId').value,
      product: document.getElementById('orderProduct').value.trim(),
      quantity: Number(document.getElementById('orderQuantity').value),
      orderDate: document.getElementById('orderDate').value,
      deadline: document.getElementById('orderDeadline').value,
      sellingPrice: Number(document.getElementById('orderSellingPrice').value),
      amountPaid: Number(document.getElementById('orderAmountPaid').value || 0),
      status: document.getElementById('orderStatus').value,
      notes: document.getElementById('orderNotes').value.trim(),
    };

    if (!order.customerId || !order.product || !order.quantity || !order.orderDate || !order.deadline || !order.sellingPrice || !order.status) {
      showError('Please complete all required order fields.', '#orderFormMessage');
      return;
    }

    if (order.amountPaid > order.sellingPrice) {
      showError('The amount paid cannot exceed the order value.', '#orderFormMessage');
      return;
    }

    const existingIndex = state.orders.findIndex((item) => item.id === order.id);
    if (existingIndex >= 0) {
      state.orders[existingIndex] = { ...state.orders[existingIndex], ...order };
    } else {
      state.orders.push(order);
    }

    const paymentEntries = state.payments.filter((payment) => payment.orderId === order.id);
    if (order.amountPaid > 0) {
      if (paymentEntries.length === 0) {
        state.payments.push({
          id: `PAY-${Date.now()}`,
          orderId: order.id,
          amount: order.amountPaid,
          date: order.orderDate,
          notes: 'Initial payment recorded from order form',
        });
      } else {
        paymentEntries.forEach((payment) => {
          payment.amount = order.amountPaid;
          payment.date = order.orderDate;
        });
      }
    }

    saveState();
    form.reset();
    document.getElementById('orderId').value = '';
    document.getElementById('orderFormTitle').textContent = 'Add order';
    showMessage('Order saved successfully.', '#orderFormMessage');
    renderAll();
  });

  document.getElementById('cancelOrderEdit').addEventListener('click', () => {
    form.reset();
    document.getElementById('orderId').value = '';
    document.getElementById('orderFormTitle').textContent = 'Add order';
    showMessage('Order form cleared.', '#orderFormMessage');
  });

  document.getElementById('ordersTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.edit-order');
    if (!target) return;
    const order = state.orders.find((item) => item.id === target.dataset.orderId);
    if (!order) return;

    document.getElementById('orderId').value = order.id;
    document.getElementById('orderCustomerId').value = order.customerId;
    document.getElementById('orderProduct').value = order.product;
    document.getElementById('orderQuantity').value = order.quantity;
    document.getElementById('orderDate').value = order.orderDate;
    document.getElementById('orderDeadline').value = order.deadline;
    document.getElementById('orderSellingPrice').value = order.sellingPrice;
    document.getElementById('orderAmountPaid').value = getOrderAmountPaid(order);
    document.getElementById('orderStatus').value = order.status;
    document.getElementById('orderNotes').value = order.notes;
    document.getElementById('orderFormTitle').textContent = `Edit ${order.id}`;
    document.getElementById('orders-view').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('ordersTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.delete-order');
    if (!target) return;
    const orderId = target.dataset.orderId;
    if (window.confirm('Delete this order? This action cannot be undone.')) {
      state.orders = state.orders.filter((item) => item.id !== orderId);
      state.payments = state.payments.filter((payment) => payment.orderId !== orderId);
      saveState();
      renderAll();
    }
  });
}

function bindCustomerForm() {
  const form = document.getElementById('customerForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const customer = {
      id: document.getElementById('customerId').value || `CUST-${Date.now()}`,
      name: document.getElementById('customerName').value.trim(),
      businessName: document.getElementById('customerBusiness').value.trim(),
      phone: document.getElementById('customerPhone').value.trim(),
      email: document.getElementById('customerEmail').value.trim(),
      notes: document.getElementById('customerNotes').value.trim(),
    };

    if (!customer.name || !customer.businessName || !customer.phone || !customer.email) {
      showError('Please fill in the required customer details.', '#customerFormMessage');
      return;
    }

    const existingIndex = state.customers.findIndex((item) => item.id === customer.id);
    if (existingIndex >= 0) {
      state.customers[existingIndex] = customer;
    } else {
      state.customers.push(customer);
    }

    saveState();
    form.reset();
    document.getElementById('customerId').value = '';
    document.getElementById('customerFormTitle').textContent = 'Add customer';
    showMessage('Customer saved successfully.', '#customerFormMessage');
    renderAll();
  });

  document.getElementById('cancelCustomerEdit').addEventListener('click', () => {
    form.reset();
    document.getElementById('customerId').value = '';
    document.getElementById('customerFormTitle').textContent = 'Add customer';
    showMessage('Customer form cleared.', '#customerFormMessage');
  });

  document.getElementById('customersTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.edit-customer');
    if (!target) return;
    const customer = state.customers.find((item) => item.id === target.dataset.customerId);
    if (!customer) return;
    document.getElementById('customerId').value = customer.id;
    document.getElementById('customerName').value = customer.name;
    document.getElementById('customerBusiness').value = customer.businessName;
    document.getElementById('customerPhone').value = customer.phone;
    document.getElementById('customerEmail').value = customer.email;
    document.getElementById('customerNotes').value = customer.notes;
    document.getElementById('customerFormTitle').textContent = `Edit ${customer.name}`;
    document.getElementById('customers-view').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('customersTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.delete-customer');
    if (!target) return;
    const customerId = target.dataset.customerId;
    if (window.confirm('Delete this customer? Orders linked to the customer will remain unless you clean them up manually.')) {
      state.customers = state.customers.filter((customer) => customer.id !== customerId);
      saveState();
      renderAll();
    }
  });
}

function bindMaterialForm() {
  const form = document.getElementById('materialForm');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const material = {
      id: document.getElementById('materialId').value || `INV-${Date.now()}`,
      name: document.getElementById('materialName').value.trim(),
      category: document.getElementById('materialCategory').value.trim(),
      stock: Number(document.getElementById('materialStock').value),
      minStock: Number(document.getElementById('materialMinStock').value),
      unit: document.getElementById('materialUnit').value.trim() || 'pcs',
    };

    if (!material.name || !material.category || material.stock < 0 || material.minStock < 0) {
      showError('Please provide valid material details.', '#materialFormMessage');
      return;
    }

    const existingIndex = state.inventory.findIndex((item) => item.id === material.id);
    if (existingIndex >= 0) {
      state.inventory[existingIndex] = material;
    } else {
      state.inventory.push(material);
    }

    saveState();
    form.reset();
    document.getElementById('materialId').value = '';
    document.getElementById('inventoryFormTitle').textContent = 'Add material';
    showMessage('Material saved successfully.', '#materialFormMessage');
    renderAll();
  });

  document.getElementById('cancelMaterialEdit').addEventListener('click', () => {
    form.reset();
    document.getElementById('materialId').value = '';
    document.getElementById('inventoryFormTitle').textContent = 'Add material';
    showMessage('Material form cleared.', '#materialFormMessage');
  });

  document.getElementById('inventoryTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.edit-material');
    if (!target) return;
    const item = state.inventory.find((material) => material.id === target.dataset.materialId);
    if (!item) return;
    document.getElementById('materialId').value = item.id;
    document.getElementById('materialName').value = item.name;
    document.getElementById('materialCategory').value = item.category;
    document.getElementById('materialStock').value = item.stock;
    document.getElementById('materialMinStock').value = item.minStock;
    document.getElementById('materialUnit').value = item.unit;
    document.getElementById('inventoryFormTitle').textContent = `Edit ${item.name}`;
    document.getElementById('inventory-view').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('inventoryTableBody').addEventListener('click', (event) => {
    const target = event.target.closest('.delete-material');
    if (!target) return;
    const materialId = target.dataset.materialId;
    if (window.confirm('Delete this material from inventory?')) {
      state.inventory = state.inventory.filter((item) => item.id !== materialId);
      saveState();
      renderAll();
    }
  });

  document.getElementById('stockMovementForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const materialId = document.getElementById('stockMaterialId').value;
    const movementType = document.getElementById('stockMovementType').value;
    const quantity = Number(document.getElementById('stockMovementQuantity').value);
    const notes = document.getElementById('stockMovementNotes').value.trim();

    if (!materialId || !quantity || quantity <= 0) {
      showError('Please select a material and enter a valid quantity.', '#stockMovementMessage');
      return;
    }

    const material = state.inventory.find((item) => item.id === materialId);
    if (!material) {
      showError('Selected material not found.', '#stockMovementMessage');
      return;
    }

    if (movementType === 'used' && quantity > material.stock) {
      showError('Stock usage cannot exceed current stock.', '#stockMovementMessage');
      return;
    }

    if (movementType === 'received') {
      material.stock += quantity;
    } else {
      material.stock -= quantity;
    }

    if (notes) {
      material.notes = notes;
    }

    saveState();
    document.getElementById('stockMovementForm').reset();
    showMessage(`Stock ${movementType === 'received' ? 'received' : 'used'} recorded successfully.`, '#stockMovementMessage');
    renderAll();
  });
}

function bindPaymentAndExpenseForms() {
  document.getElementById('paymentForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = document.getElementById('paymentOrderId').value;
    const paymentDate = document.getElementById('paymentDate').value;
    const paymentAmount = Number(document.getElementById('paymentAmount').value);
    const authorizedAdjustment = document.getElementById('paymentAuthorizedAdjustment').checked;
    const notes = document.getElementById('paymentNotes').value.trim();

    if (!orderId || !paymentDate || !paymentAmount || paymentAmount <= 0) {
      showError('Please provide a valid payment record.', '#paymentFormMessage');
      return;
    }

    const order = state.orders.find((item) => item.id === orderId);
    if (!order) {
      showError('Selected order could not be found.', '#paymentFormMessage');
      return;
    }

    const totalPaid = getOrderAmountPaid(order);
    const remainingBalance = Number(order.sellingPrice || 0) - totalPaid;

    if (paymentAmount > remainingBalance && !authorizedAdjustment) {
      showError('Payment exceeds the remaining order balance. Check the authorised adjustment option if this is an approved exception.', '#paymentFormMessage');
      return;
    }

    state.payments.push({
      id: `PAY-${Date.now()}`,
      orderId,
      amount: paymentAmount,
      date: paymentDate,
      notes,
    });

    if (paymentAmount > remainingBalance && authorizedAdjustment) {
      state.adjustments.push({
        orderId,
        amount: paymentAmount - remainingBalance,
        date: paymentDate,
        notes: notes || 'Authorised balance override',
      });
    }

    order.amountPaid = getOrderAmountPaid(order);
    saveState();
    document.getElementById('paymentForm').reset();
    showMessage('Payment recorded successfully.', '#paymentFormMessage');
    renderAll();
  });

  document.getElementById('expenseForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const expense = {
      id: `EXP-${Date.now()}`,
      date: document.getElementById('expenseDate').value,
      category: document.getElementById('expenseCategory').value,
      amount: Number(document.getElementById('expenseAmount').value),
      notes: document.getElementById('expenseNotes').value.trim(),
    };

    if (!expense.date || !expense.amount || expense.amount <= 0) {
      showError('Please provide a valid expense amount and date.', '#expenseFormMessage');
      return;
    }

    state.expenses.push(expense);
    saveState();
    document.getElementById('expenseForm').reset();
    showMessage('Expense saved successfully.', '#expenseFormMessage');
    renderAll();
  });
}

function bindResetButtons() {
  document.getElementById('resetDemoBtn').addEventListener('click', () => {
    if (window.confirm('Reset all demo data? This will replace the current localStorage data.')) {
      state = JSON.parse(JSON.stringify(defaultState));
      saveState();
      renderAll();
      document.getElementById('dataManagementMessage').textContent = 'Demo data was reset to the sample dataset.';
      document.getElementById('dataManagementMessage').className = 'form-message success';
    }
  });

  document.getElementById('clearLocalStorageBtn').addEventListener('click', () => {
    if (window.confirm('Clear all localStorage data?')) {
      localStorage.removeItem(STORAGE_KEY);
      state = JSON.parse(JSON.stringify(defaultState));
      renderAll();
      const messageEl = document.getElementById('dataManagementMessage');
      messageEl.textContent = 'Stored data cleared and restored to the demo dataset.';
      messageEl.className = 'form-message success';
    }
  });

  document.getElementById('restoreDemoBtn').addEventListener('click', () => {
    if (window.confirm('Restore the built-in demo data?')) {
      state = JSON.parse(JSON.stringify(defaultState));
      saveState();
      renderAll();
      const messageEl = document.getElementById('dataManagementMessage');
      messageEl.textContent = 'Sample data restored.';
      messageEl.className = 'form-message success';
    }
  });
}

function bindSearchFilters() {
  const orderSearch = document.getElementById('orderSearch');
  const orderStatusFilter = document.getElementById('orderStatusFilter');
  const customerSearch = document.getElementById('customerSearch');

  if (orderSearch) orderSearch.addEventListener('input', renderOrders);
  if (orderStatusFilter) orderStatusFilter.addEventListener('change', renderOrders);
  if (customerSearch) customerSearch.addEventListener('input', renderCustomers);
}

function showMessage(text, selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = text;
  el.className = 'form-message success';
}

function showError(text, selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = text;
  el.className = 'form-message error';
}

function initDefaults() {
  const today = new Date().toISOString().slice(0, 10);
  const orderDate = document.getElementById('orderDate');
  const paymentDate = document.getElementById('paymentDate');
  const expenseDate = document.getElementById('expenseDate');

  if (orderDate) orderDate.value = today;
  if (paymentDate) paymentDate.value = today;
  if (expenseDate) expenseDate.value = today;
}

function init() {
  bindNavigation();
  bindGlobalSearch();
  bindOrderForm();
  bindCustomerForm();
  bindMaterialForm();
  bindPaymentAndExpenseForms();
  bindResetButtons();
  bindSearchFilters();
  initDefaults();
  renderAll();
}

window.addEventListener('DOMContentLoaded', init);
