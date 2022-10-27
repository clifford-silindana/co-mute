using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ComuteBackend.Models;

namespace ComuteBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarPoolsController : ControllerBase
    {
        private readonly ComuteDbContext _context;

        public CarPoolsController(ComuteDbContext context)
        {
            _context = context;
        }

        // GET: api/CarPools
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CarPool>>> GetCarPools()
        {
            return await _context.CarPools.ToListAsync();
        }

        // GET: api/CarPools/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarPool>> GetCarPool(int id)
        {
            var carPool = await _context.CarPools.FindAsync(id);

            if (carPool == null)
            {
                return NotFound();
            }

            return carPool;
        }

        // PUT: api/CarPools/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCarPool(int id, CarPool carPool)
        {
            if (id != carPool.CarPoolId)
            {
                return BadRequest();
            }

            _context.Entry(carPool).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarPoolExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CarPools
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CarPool>> PostCarPool(CarPool carPool)
        {
            _context.CarPools.Add(carPool);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarPool", new { id = carPool.CarPoolId }, carPool);
        }

        // DELETE: api/CarPools/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCarPool(int id)
        {
            var carPool = await _context.CarPools.FindAsync(id);
            if (carPool == null)
            {
                return NotFound();
            }

            _context.CarPools.Remove(carPool);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarPoolExists(int id)
        {
            return _context.CarPools.Any(e => e.CarPoolId == id);
        }
    }
}
